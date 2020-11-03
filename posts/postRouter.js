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
  const change = req.body;
  
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
