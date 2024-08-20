const mongoose = require ('mongoose')
const  menuItemSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    taste: {
        type : String,
        enum : ['sweet','spicy','sour'],
        required : true
    },
    is_drink : {
        type : String,
        default : false
    },
    ingredients:{
        type : [String],
        default : []
    }
})

const menuItem = mongoose.model('menuItem', menuItemSchema)
module.exports = menuItem;