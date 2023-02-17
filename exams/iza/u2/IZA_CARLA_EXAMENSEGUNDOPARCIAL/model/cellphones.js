const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CellphonesSchema = new Schema(
    {
        id: { type: String },
        name: { type: String },
        dercription: { type: String },
        
    }
)

module.exports = Cellphones = mongoose.model('Cellphones', CellphonesSchema)