const mongoose= require('mongoose');
require('dotenv').config();
// const mongodURL=process.env.dblocal;
const mongodURL=process.env.db;
mongoose.connect(mongodURL,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("mongod is connected");
})
db.on('disconnected',()=>{
    console.log("mongod is disconnected");
})

module.exports=db;