const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb+srv://ederu:9766@cluster0.jy0rn.mongodb.net/tindevdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(3001, () => {
  "O pai ta on na por 3001"
});