const { Router } = require('express');

const route = Router();

route.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

route.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Route is work!!!',
  });
});

module.exports = route;
