const express = require('express');
const bodyParser = require('body-parser');
const index = require('../server/routes/index');

const app = express();
app.use(bodyParser.json());

app.use('/', index);

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
