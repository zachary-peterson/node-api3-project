const express = require('express');
const db = require('./postDb');
const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  console.log('working');
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
  const { id } = req.params;
  const changes = req.body;

  if(isValidUpdate(changes)){
  db.update(id, changes)
  .then(count => {
    if(count === 1) {
      res.status(200).json({ res: "Updated succesfully."});
    } else {
      res.status(404).json({ err: "Record could not be found."});
    }
  })
  .catch(errs => {
    console.log(errs);
    res.status(500).json({errorMsg: "Error updating db"});
  });
}else {
  res.status(404).json({errorMsg: "Please update title or contents."});
}
});

// custom middleware

function isValid(post) {
  
}

function isValidUpdate(changes) {
  return Boolean(changes.title || changes.contents);
}

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
