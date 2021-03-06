const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('../server/routes/index');
const works = require('../server/routes/works');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB config

const db = require('../server/config/keys').mongoURI;

// Connect to MongoDb

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB conected...'))
  .catch(err => console.log(err));

app.use('/', index);
app.use('/works', works);

app.use((req, res, next) => {
  res.status(404);
  res.json({
    status: 404,
    message: 'Route not found!',
  });
  next();
});

app.use((err, req, res, next) => {
  app.status(500);
  app.json({
    status: 500,
    message: err.message,
  });
  next();
});


module.exports = app;
