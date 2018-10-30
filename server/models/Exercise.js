const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const exeSchema = new Schema({
  value: {
    type: String,
  },
  text: {
    type: String,
  },
});

module.exports = Exercise = mongoose.model('exercise', exeSchema);
