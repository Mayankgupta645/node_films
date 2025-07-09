const mongoose= require('mongoose');
const mongodURL='mongodb://localhost:27017/films'
mongoose.connect(mongodURL);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("mongod is connected");
})
db.on('disconnected',()=>{
    console.log("mongod is disconnected");
})

module.exports=db;