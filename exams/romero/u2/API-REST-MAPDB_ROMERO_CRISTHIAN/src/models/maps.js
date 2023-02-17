const mongoose = require("mongoose");

const mapSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coordinates: {
      type: String,
      required: true,
    },
  },
  {
    collection: "maps"
  }
);

module.exports = mongoose.model("maps", mapSchema);
