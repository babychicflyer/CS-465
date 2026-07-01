const path = require('node:path');
const express = require('express');

const app = express();
const PORT = 3000;

// Hide the "X-Powered-By: Express" response header - SonarQube flags this
// because it discloses server framework/version info to anyone probing the site
app.disable('x-powered-by');

// Serve everything in this folder as static files
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Travlr Getaways server running at http://localhost:${PORT}`);
});