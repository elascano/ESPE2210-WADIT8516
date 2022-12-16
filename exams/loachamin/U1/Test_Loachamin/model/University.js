const { Double, Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
  id_university: { type: String },
  name_university: { type: String },
  university_director: { type: String },
  number_apartments: { type: Number},
  address:{ type: String },
  phone:{ type: Number },
});

module.exports = University = mongoose.model("University", UniversitySchema);
