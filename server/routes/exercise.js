const { Router } = require('express');
const Exercise = require('../models/Exercise');

const route = Router();

// Get all Items

route.get('/', (req, res) => {
  Exercise.find()
    .then(items => res.json(items));
});

route.post('/', (req, res) => {
  const newExercise = new Exercise({
    exercise: req.body.exercise,
  });
  newExercise.save().then(exercise => res.json(exercise));
});




module.exports = route;
