const express = require('express');

const server = express();
server.use(express.json());

server.use(function(req, res) {
  res.status(404).send("Ain't nobody got time for that!");
});

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log('...');

  next();
}
server.use(logger);
module.exports = server;
