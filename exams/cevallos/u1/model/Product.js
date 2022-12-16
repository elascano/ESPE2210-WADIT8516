const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
    {
        id: { type: Number },
        name: { type: String },
        brand: { type: String }
    }
)

module.exports = Product = mongoose.model('product', productSchema)
