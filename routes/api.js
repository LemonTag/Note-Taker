const path = require('path');
const router = require('express').Router();
const store = require('./store')

// GET Route for feedback page
router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes);
    }).catch(() => {
        res.status(500).json(err);
    })
})



module.exports = router;