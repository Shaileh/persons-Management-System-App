require('./config/config');
const {mongoose} = require('./db/mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const {Person} = require('./models/person')
const express = require('express')
const bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.json()); // for parsing application/json

app.post('/persons',(req,res) => {
  var person = new Person(req.body);

  person.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(404).send(e);
  })
});

app.get('/persons',(req, res) => {
  Person.find({}).then((docs) => {
    res.send({counter:docs.length,docs});
  }).catch((e) => {res.status(404).send(e);});
});

app.get('/persons/:id',(req, res) => {
   var {id} = req.params;

   if(!ObjectId.isValid(id)){
     return res.status(404).send({error: "inValid ID"});
   }

   Person.findById(id).then((doc) => {
     res.send(doc);
   }).catch((e) => {res.status(404).send(e);})
});

app.delete('/persons/:id',(req, res) => {
   var {id} = req.params;
   if(!ObjectId.isValid(id)){
     return res.status(404).send({error: "inValid ID"});
   }
   Person.findByIdAndDelete(id).then((doc) => {
     res.send(doc);
   }).catch((e) => {res.status(404).send(e);})
});

app.patch('/persons/:id',(req, res) => {
   var {id} = req.params;
   if(!ObjectId.isValid(id)){
     return res.status(404).send({error: "inValid ID"});
   }
   Person.findByIdAndUpdate({_id:id},{$set: req.body},{new:true,runValidators:true}).then((doc) => {
    res.send(doc);
   }).catch((e) => {res.status(404).send(e);})
});



app.listen(process.env.PORT,() => {
  console.log(`listen to port ${process.env.PORT}`);
})
