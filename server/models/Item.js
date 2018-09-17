const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const itemSchema = new Schema({
  exercise_name: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
  },
  qty: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },

});

module.exports = Item = mongoose.model('item', itemSchema);
