const express = require('express')
const app = express()
const db = require('./db');
const bodyParser = require('body-parser')
require ('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Importing Routers
const personRouter = require('./routes/personRouter');
const menuItemRouter = require('./routes/menuItemRouter');

// using Routers
app.use('/person', personRouter)
app.use('/menu', menuItemRouter)

// port listening
app.listen(PORT, ()=>{
    console.log('Server start at Port 4000')
})
