const mongoose = require('mongoose');
const validator = require('validator')

var personSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
    minlength:1
  },
  email:{
    type: String,
    require: true,
    trim: true,
    minlength:1,
    validate: (value) => validator.isEmail(value)
  },
  gender:{
    type: String,
    require:true,
    enum: ['Male','Female']
  },
  phoneNumber:{
    type: String,
    trim: true
  }
});



var Person = mongoose.model('people',personSchema);

module.exports = {Person};
