import 'dotenv/config';
import pkg from 'pg';
const { Client } = pkg;

const rateLimitMap = new Map();
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://MYDOMAIN.COM';
const RATE_LIMIT = 20;
const RATE_WINDOW = 60 * 1000; // 1 minute

export default async (req, res) => {
  // CORS check - allow all for public access

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  const now = Date.now();
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }
  const timestamps = rateLimitMap.get(ip);
  timestamps.push(now);
  // Remove timestamps older than RATE_WINDOW
  const validTimestamps = timestamps.filter(t => now - t < RATE_WINDOW);
  rateLimitMap.set(ip, validTimestamps);
  if (validTimestamps.length > RATE_LIMIT) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  // Parse certificate_number
  let certificate_number;
  if (req.method === 'GET') {
    certificate_number = req.query.certificate_number;
  } else {
    certificate_number = req.body?.certificate_number;
  }
  if (!certificate_number) {
    return res.status(400).json({ error: 'Certificate number is required' });
  }
  if (certificate_number.length < 14 || certificate_number.length > 16) {
    return res.status(400).json({ error: 'Certificate number must be 14 to 16 digits' });
  }

  // Logging
  const timestamp = new Date().toISOString();
  const sanitizedParams = { certificate_number };
  let resultCount = 0;
  let source = 'primary';

  // Database connection
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  try {
    await client.connect();
    let result;
    let values = [certificate_number];

    // Primary query - try for all certificate numbers
    const primaryQuery = `
      SELECT
        COALESCE((c.json_data::jsonb)->>'firstName','') || ' ' || COALESCE((c.json_data::jsonb)->>'lastName','') AS candidate_name,
        COALESCE((c.json_data::jsonb)->>'passport','') AS passport,
        cs.certificate_name,
        cs.certificate_number,
        cs.start_date,
        cs.end_date,
        cs.issue_date,
        cs.expiry_date
      FROM certificate_selections cs
      JOIN candidates c ON cs.candidate_id = c.id
      WHERE cs.certificate_number = $1
        AND c.json_data IS NOT NULL
        AND jsonb_typeof(c.json_data::jsonb) = 'object'
      LIMIT 1;
    `;
    result = await client.query(primaryQuery, values);
    resultCount = result.rows.length;

    if (resultCount === 0) {
      // Fallback to legacy
      const legacyQuery = `
        SELECT
          candidate_name,
          passport,
          certificate_name,
          certificate_number,
          start_date,
          end_date,
          issue_date,
          expiry_date
        FROM legacy_certificates
        WHERE certificate_number = $1
        LIMIT 1;
      `;
      result = await client.query(legacyQuery, values);
      resultCount = result.rows.length;
      if (resultCount > 0) {
        source = 'legacy';
      }
    } else {
      source = 'primary';
    }

    if (resultCount === 0) {
      return res.status(404).json({ status: 'INVALID' });
    }

    const row = result.rows[0];
    // Format dates as ISO strings (YYYY-MM-DD)
    if (row.start_date) row.start_date = row.start_date.toISOString().split('T')[0];
    if (row.end_date) row.end_date = row.end_date.toISOString().split('T')[0];
    if (row.issue_date) row.issue_date = row.issue_date.toISOString().split('T')[0];
    if (row.expiry_date) row.expiry_date = row.expiry_date.toISOString().split('T')[0];

    // Check certificate validity
    const currentDate = new Date();
    const expiryDate = row.expiry_date ? new Date(row.expiry_date) : null;
    if (!expiryDate) {
      row.validity_status = 'Expiry date not available';
    } else {
      row.validity_status = currentDate <= expiryDate ? 'Certificate is valid' : 'Certificate is expired';
    }

    // Add source
    row.source = source;

    // Add image fields as per requirements
    row.certificate_image = null;
    row.image_message = 'Image not available at the moment';

    // Log source
    console.log(`Certificate ${certificate_number} found in ${source}`);

    return res.status(200).json({ status: 'VALID', data: row });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ status: 'INVALID', message: 'Internal server error' });
  } finally {
    await client.end();
    // Log after query
    console.log(`${timestamp} ${ip} ${JSON.stringify(sanitizedParams)} ${resultCount}`);
  }
};