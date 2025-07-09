
const express=require('express');
const database=require('./database');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
var app=express();
app.use(bodyParser.json());
//Api
app.get('/login',(req,res)=>{
res.send("hi welcome to the films collection");
})
//person
const person=require('./routing/personrouter');
app.use('/person',person);
//movie records
const movierecords=require('./routing/movierecordsrouter');
app.use('/movie',movierecords);

//portal numbers
app.listen(3000,()=>{
    console.log("working prefectly ");
});