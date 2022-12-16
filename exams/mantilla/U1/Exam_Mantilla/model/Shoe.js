const { Double, Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
  id_shoe: { type: String },
  brand: { type: String },
  price:{ type: Number },
});

module.exports = Shoe = mongoose.model("Shoe", ShoeSchema);
