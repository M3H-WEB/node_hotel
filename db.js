const mongoose = require('mongoose')
const mongoURL = 'mongodb://localhost:27017/hotel';
mongoose.connect(mongoURL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const db = mongoose.connection;

db.on('connected', ()=> {
    console.log('connected to mongodb server')
})

db.on('error', (err)=> {
    console.log('connection error' , err)
})

db.on('disconnected', ()=> {
    console.log('disconnected from mongodb server')
})

module.exports = db;

// dddddddddddddddddddddddddd