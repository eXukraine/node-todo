const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const programsSchema = new Schema({

  exercises: {
    type: String,
  },

});

module.exports = Programs = mongoose.model('programs', programsSchema);
