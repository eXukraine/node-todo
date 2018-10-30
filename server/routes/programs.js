const { Router } = require('express');
const Programs = require('../models/Programs');

const route = Router();

// Get all Items

// route.get('/', (req, res) => {
//   Programs.find()
//     .then(items => res.json(items));
// });

route.post('/', (req, res) => {
  const newProgram = new Programs({
    exercise: req.body.exercise,
  });
  newProgram.save().then(exercise => res.json(exercise));
});

module.exports = route;
