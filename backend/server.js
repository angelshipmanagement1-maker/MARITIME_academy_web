const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3002;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database setup
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err.message);
  } else {
    console.log('Connected to PostgreSQL database.');
    createTables();
  }
});

// Create tables
async function createTables() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS certificates (
        id SERIAL PRIMARY KEY,
        certificate_no VARCHAR(50) UNIQUE NOT NULL,
        participant_name VARCHAR(255) NOT NULL,
        document_id VARCHAR(50) NOT NULL,
        course VARCHAR(255) NOT NULL,
        issue_date DATE NOT NULL,
        certificate_image TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Certificates table created or already exists.');
    await insertSampleData();
  } catch (err) {
    console.error('Error creating table:', err.message);
  }
}

// Insert sample data
async function insertSampleData() {
  const sampleData = [
    {
      certificate_no: 'CERT-001',
      participant_name: 'John Doe',
      document_id: 'PAS123456',
      course: 'Basic Safety Training',
      issue_date: '2024-01-15',
      certificate_image: '/uploads/sample-cert.jpg'
    },
    {
      certificate_no: 'CERT-002',
      participant_name: 'Jane Smith',
      document_id: 'PAS789012',
      course: 'Advanced Maritime Course',
      issue_date: '2024-02-20',
      certificate_image: '/uploads/sample-cert2.jpg'
    }
  ];

  try {
    for (const data of sampleData) {
      await pool.query(`
        INSERT INTO certificates
        (certificate_no, participant_name, document_id, course, issue_date, certificate_image)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (certificate_no) DO NOTHING
      `, [data.certificate_no, data.participant_name, data.document_id,
          data.course, data.issue_date, data.certificate_image]);
    }
    console.log('Sample data inserted.');
  } catch (err) {
    console.error('Error inserting sample data:', err.message);
  }
}

// API Routes

// Search certificates
app.get('/api/certificates/search', async (req, res) => {
  const { type, value } = req.query;

  if (!type || !value) {
    return res.status(400).json({ error: 'Type and value are required' });
  }

  let query = '';
  let params = [];

  switch (type) {
    case 'name':
      query = 'SELECT * FROM certificates WHERE participant_name ILIKE $1';
      params = [`%${value}%`];
      break;
    case 'document':
      query = 'SELECT * FROM certificates WHERE document_id = $1';
      params = [value];
      break;
    case 'certificate':
      query = 'SELECT * FROM certificates WHERE certificate_no = $1';
      params = [value];
      break;
    default:
      return res.status(400).json({ error: 'Invalid search type' });
  }

  try {
    const result = await pool.query(query, params);
    res.json({ certificates: result.rows });
  } catch (err) {
    console.error('Error searching certificates:', err.message);
    res.status(500).json({ error: 'Database error' });
  }
});

// Get certificate by ID
app.get('/api/certificates/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM certificates WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Certificate not found' });
    }
    res.json({ certificate: result.rows[0] });
  } catch (err) {
    console.error('Error fetching certificate:', err.message);
    res.status(500).json({ error: 'Database error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  try {
    await pool.end();
    console.log('Database connection closed.');
  } catch (err) {
    console.error('Error closing database:', err.message);
  }
  process.exit(0);
});