const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const pictureSchema = Schema({
    Id: {type: Number},
    Description: {type: String},
    Price: {type: Number},
})

module.exports = mongoose.model('picture', pictureSchema)