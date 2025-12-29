import 'dotenv/config';
import pkg from 'pg';
const { Client } = pkg;

const rateLimitMap = new Map();
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://MYDOMAIN.COM';
const RATE_LIMIT = 20;
const RATE_WINDOW = 60 * 1000; // 1 minute

export default async (req, res) => {
  // CORS check
  const origin = req.headers.origin;
  const isAllowed = !origin || origin === ALLOWED_ORIGIN || origin.startsWith('http://localhost:');
  if (origin && !isAllowed) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  res.setHeader('Access-Control-Allow-Origin', origin || ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
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

  // Parse JSON body
  const { passport, certificate_number } = req.body || {};
  if (!passport && !certificate_number) {
    return res.status(400).json({ status: 'INVALID', message: 'At least one of passport or certificate_number must be provided' });
  }

  // Logging
  const timestamp = new Date().toISOString();
  const sanitizedParams = { passport: passport || null, certificate_number: certificate_number || null };
  let resultCount = 0;

  // Database connection
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  try {
    await client.connect();
    const query = `
      SELECT
        c.json_data->>'firstName' as firstname,
        c.json_data->>'lastName' as lastname,
        c.json_data->>'passport' as passport,
        cs.certificate_name,
        cs.certificate_number,
        cs.start_date,
        cs.end_date,
        cs.issue_date,
        cs.expiry_date
      FROM certificate_selections cs
      JOIN candidates c ON cs.candidate_id = c.id
      WHERE
        ($1::text IS NOT NULL AND c.json_data->>'passport' = $1)
        OR
        ($2::text IS NOT NULL AND cs.certificate_number = $2)
      LIMIT 1;
    `;
    const values = [passport || null, certificate_number || null];
    const result = await client.query(query, values);
    resultCount = result.rows.length;

    if (resultCount === 0) {
      return res.status(200).json({ status: 'INVALID' });
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
      row.validity_status = currentDate <= expiryDate ? 'Certificate is valid' : 'Certificate is invalid';
    }

    // Add image fields as per requirements
    row.certificate_image = null;
    row.image_message = 'Image not available at the moment';

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