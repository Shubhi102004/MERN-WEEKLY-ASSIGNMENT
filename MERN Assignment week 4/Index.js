const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
