var mongoose=require('mongoose');

const filmsperson=new mongoose.Schema(
    {
        username:{  
            type:String,
            required:true

        },
        age:{
            type:Number,
            required:true
        },
        popular:{ 
            type:Boolean,
            required:true
        },
        gender:{
            type:String,
            enum: ['male','female'],
            required:true
        }
        })
        const person=mongoose.model('filmsperson',filmsperson);
        module.exports=person;