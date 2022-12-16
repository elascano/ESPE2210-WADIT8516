const mongoose = require("mongoose");

const shoesSchema = mongoose.Schema({
    ID_product: {
        brand: String,
        description: String,
        size: Number,
        price: Number,
      }

});

module.exports = mongoose.model('shoes', shoesSchema);