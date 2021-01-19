const express = require('express');

const server = express();

const PORT = 3000;

// GET, POST, PUT, DELETE
server.get('/', (req, res) => {
  res.json({ message: `Hello ${req.query.name}`});
});

server.listen(PORT, () => {
  "O pai ta on na por 3000"
});