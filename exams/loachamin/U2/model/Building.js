const { Double, Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuildingSchema = new Schema({
  id: { type: String },
  description : { type: String },
  address: { type: String },
});

module.exports = Building = mongoose.model("Building", BuildingSchema);