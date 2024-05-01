const path = require('path');
const router = require('express').Router();

// GET Route for feedback page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// * means all paths it will check /notes first
// GET Route for homepage
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

module.exports = router