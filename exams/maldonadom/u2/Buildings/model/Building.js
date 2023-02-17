// Building.js (en la carpeta model)
const mongoose = require('mongoose');

const BuildingSchema = new mongoose.Schema({
  id: String,
  description: String,
  city: String,
  phone:String
});

module.exports = mongoose.model('Building', BuildingSchema);
