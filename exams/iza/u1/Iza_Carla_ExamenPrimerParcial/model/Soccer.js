const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SoccersSchema = new Schema(
    {
        id: { type: Number },
        name: { type: String },
        lastname: { type: String },
        email: { type: String },
        country: { type: String }
        
        
    }
)

module.exports = Soccer = mongoose.model('Soccer', SoccersSchema)
