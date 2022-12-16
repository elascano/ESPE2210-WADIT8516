const mongoose = require("mongoose");

const professorSchema = mongoose.Schema({
  id: {
    required: true,
    type : Number
  },
  ced: {
    required: true,
    type : String
  },

  name: {
    required: true,
    type : String
  },

  lastname: {
    required: true,
      type : String
  },
  subject: {
    required: true,
      type : String
  },
  hours: {
    required: true,
      type : Number
  },
  students_assigned: {
    required: true,
      type : Number
  }
});

module.exports = mongoose.model('Professors', professorSchema);