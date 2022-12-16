const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    code:{
        required:true,
        type: String
    },
    name:{
        required:true,
        type: String
    },
    marck:{
        required: true,
        type: String
    }
})
module.exports = mongoose.model('MenuItem', menuItemSchema, 'menuItems')