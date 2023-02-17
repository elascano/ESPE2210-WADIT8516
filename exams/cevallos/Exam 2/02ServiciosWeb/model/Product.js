const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
    {
        id: { type: Number },
        name: { type: String },
        description: { type: String }
    },
    {
        collection: "products",
        timestamps: false,
        versionKey: false,
    }
);


module.exports = Product = mongoose.model('Product', productSchema)
