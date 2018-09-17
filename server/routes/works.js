const express = require('express');
const { Router } = require('express');
const Item = require('../models/Item');

const route = Router();

// Get all Items

route.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items));
});

// Create new Item

route.post('/', (req, res) => {
  const newItem = new Item({
    exercise_name: req.body.exercise_name,
    weight: req.body.weight,
    qty: req.body.qty,

  });
  newItem.save().then(item => res.json({ succes: true }));
});

// Delete dy ID

route.delete('/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id).then(item => res.json({ succes: true }))
    .catch(err => res.status(404).json({ succes: false }));
});

// Get by Exercise_name

route.get('/find/:exName', (req, res) => {
  Item.find({ exercise_name: req.params.exName })
    .then(item => res.json(item));
});


module.exports = route;
