const router = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
      res.json(JSON.parse(data))
    );
  });

router.post('/notes', (req, res)=> {
    const {title , text} = req.body;
    if (title && text) {
        const newNote = {
          title,
          text
        };
        readAndAppend(newNote, './db/db.json');
        const response = {
          status: 'success',
          body: newNote,
        };
    
        res.json(response);
      }
})

module.exports = router;