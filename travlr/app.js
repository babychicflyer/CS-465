const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// Serve everything in this folder as static files
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Travlr Getaways server running at http://localhost:${PORT}`);
});