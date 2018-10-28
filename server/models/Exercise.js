const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const exeSchema = new Schema({
  exercise: {
    type: String,
  },
});

module.exports = Exercise = mongoose.model('exercise', exeSchema);
