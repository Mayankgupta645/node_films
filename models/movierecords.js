const mongoose=require('mongoose');
const movie=new mongoose.Schema({
    moviename:{
        type:String,
        required:true
    },
    budget:{
        type:Number,
        required:true
    },
    moviecollection:{
        type:Number,
        required:true
    },
    performance:{
        type:String,
        enum:['hit','flop'],
        required:true
    }
    
});
const movierecords=mongoose.model('movie records',movie);
module.exports=movierecords;