const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Route is work!!!',
  });
});

module.exports = route;
