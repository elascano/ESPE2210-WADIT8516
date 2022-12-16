const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SportSchema = new Schema({
    id: {type: Number},
    name: {type: String},
    country: {type: String},
    city: {type: String},
    place: {type: String},
})
module.exports = Sport = mongoose.model('Sport', SportSchema)