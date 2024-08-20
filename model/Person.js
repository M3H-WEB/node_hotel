const mongoose = require ('mongoose')
const personSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    age: {
        type : Number,
        required : true
    },
    phone: {
        type : String,
        required : true
    },
    work : {
        type : String,
        enum : ['chef','waiter','manager']
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
})

const Person = mongoose.model('person', personSchema)
module.exports = Person;