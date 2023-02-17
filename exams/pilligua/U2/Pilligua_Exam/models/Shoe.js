const mongoose = require("mongoose");
const shoesSchema = new mongoose.Schema(
    {
        id: { type: Number },
        description: { type: String },
        price: { type: Number},
    },
    {
        collection: "shoe",
        versionKey: false
    }

);
module.exports = mongoose.model("shoe", shoesSchema);