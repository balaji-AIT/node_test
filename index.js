const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API is healthy!',
    timestamp: new Date().toISOString(),
  });
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Health API running at http://localhost:${port}`);
});
