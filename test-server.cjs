const express = require('express');

const app = express();
const port = 3000;

// CORS middleware for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Middleware to simulate Vercel environment
app.use((req, res, next) => {
  // Simulate req.query from URL params
  req.query = req.query || {};
  next();
});

// Route for the API
app.get('/api/verify', async (req, res) => {
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