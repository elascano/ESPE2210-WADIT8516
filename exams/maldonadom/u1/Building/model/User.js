const { Double, Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id_user: { type: String },
  identification: { type: String },
  name_user: { type: String },
  lastname_user: { type: String }
  
});

module.exports = Product = mongoose.model("User", UserSchema);
