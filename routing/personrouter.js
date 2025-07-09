const express=require('express');
const router=express.Router();
const filmsperson=require('./../models/filmsperson');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newperson=filmsperson(data);

        const response=await newperson.save();
        console.log("data saved");
        res.status(200).json(response);


    }
catch(err){
    console.log(err);
    res.status(500).json({error:'internal error, check anss try again'});

}
})

router.get('/',async(req,res)=>{
try{
    const information=await filmsperson.find();
    
        console.log("data saved");
        res.status(200).json(information);

    
}
catch(err){
    console.log(err);
    res.status(500).json({error:'internal error, check and try again'});

}
})

router.get('/:gendertype',async(req,res)=>{
try{
    const gendertype=req.params.gendertype;

    if(gendertype=='male'||gendertype=='female'){
        const response=await filmsperson.find({gender: gendertype});
        console.log("data feteched successfully");
        res.status(200).json(response);

    }
    
       
else{
    res.status(404).json({error:'gender is invaild '})
}
    
}
catch(err){
    console.log(err);
    res.status(500).json({error:'internal error, check and try again'});

}
})

router.put('/:id',async(req,res)=>{
    try{
         const personid=req.params.id;
         const update=req.body;
         const response= await filmsperson.findByIdAndUpdate(personid,update);
         console.log("data updated");
         res.status(200).json(response);
         if(!personid){
            res.status(404).json({message:'invalid id pls check and try again'});
         }
    }catch(err){
        console.log(err);
        res.status(500).json({response:'internal error , try again '});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
    const personid=req.params.id;
    const response= await filmsperson.findByIdAndDelete(personid);
    console.log("data delete");
         res.status(200).json({message:'data delete successfully'});
         if(!personid){
            res.status(404).json({message:'invalid id pls check and try again'});
         }
        }
    
    catch(err){
        console.log(err);
        res.status(500).json({response:'internal error , try again '});
    }
});



module.exports=router;