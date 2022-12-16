const mongoose = require("mongoose");

const trafficSchema = new mongoose.Schema({
    type:{
        required: true,
        type: String
    },
    speed:{
        required: true,
        type: String
    },
    oil:{
        required: true,
        type: String
    },
    brand:{
        required: true,
        type: String
    },    
    model:{
        required: true,
        type: String
    },
    year:{
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Traffic', trafficSchema, 'traffic');