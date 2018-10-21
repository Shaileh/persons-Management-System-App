require('./config/config');
const {mongoose} = require('./db/mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const {Person} = require('./models/person')
const express = require('express')
const bodyParser = require('body-parser');

var app = express()
// "GET, POST, OPTIONS, PUT, DELETE"
app.use(bodyParser.json()); // for parsing application/json
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
   res.header("Access-Control-Allow-Methods", "*");
  next();
 });

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
    res.send(docs);
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
   Person.findOneAndDelete({_id:id}).then((doc) => {
     if(doc){
     res.send(doc);
   }
   else {
     res.status(404).send();
   }
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
