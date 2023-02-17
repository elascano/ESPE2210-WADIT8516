const mongoose = require("mongoose");

const bankSchema = mongoose.Schema({
  ID_Banks: {
    name: String,
    direction: String,
    telephone: Number,
  
  },
  
});

module.exports = mongoose.model('banks', bankSchema);