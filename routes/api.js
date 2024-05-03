const path = require('path');
const router = require('express').Router();
const store = require('./store')
const help = require('./help')

// GET Route for feedback page
router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes);
    }).catch(() => {
        res.status(500).json(err);
    })
})

// POST Route for a new UX/UI tip
router.post('/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: help(),
      };

      
    store.addNote(newNote)
    .then((note) => 
        res.json(note)
    ) .catch(() => {
        res.status(500).json(err);
    })
    }

})
  
module.exports = router;