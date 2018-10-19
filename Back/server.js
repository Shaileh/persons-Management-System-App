require('./config/config');
const {mongoose} = require('./db/mongoose');
const express = require('express')

var app = express()


app.listen(process.env.PORT,() => {
  console.log(`listen to port ${process.env.PORT}`);
})
