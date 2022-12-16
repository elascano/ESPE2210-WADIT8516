const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SportSchema = new Schema(
    {
        id: { type: String },
        name: { type: String },
        lastname: { type: String },
        email: { type: String },
    }
)

module.exports = Sport = mongoose.model('Sport', SportSchema)