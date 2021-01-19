const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
  const { user } = socket.handshake.query
  connectedUsers[user] = socket.id
  console.log('Client connectet:', user )
});

mongoose.connect('mongodb+srv://ederu:9766@cluster0.jy0rn.mongodb.net/tindevdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.io = io
  req.connectedUsers = connectedUsers
  return next()
})

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(3333, () => {
  "O pai ta on na por 3001"
});