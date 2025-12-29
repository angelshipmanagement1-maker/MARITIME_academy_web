require('dotenv').config();
const express = require('express');

const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || 'http://localhost:3001');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Route for the API
app.post('/api/verify', async (req, res) => {
  // Dynamically import the ES module
  const { default: verifyHandler } = await import('./api/verify.js');
  // Call the serverless function
  await verifyHandler(req, res);
});

// Serve test.html
app.use(express.static('.'));

app.listen(port, () => {
  console.log(`Test server running at http://localhost:${port}`);
  console.log(`Test the API at http://localhost:${port}/test.html`);
});