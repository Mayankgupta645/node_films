const express=require('express');
const router=express.Router();
const movierecords=require('./../models/movierecords');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newmmovie= movierecords(data);
        const response=await newmmovie.save();
        console.log("records saved");
        res.status(200).json(response);



    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})
router.get('/',async(req,res)=>{
    try{
        const records= await movierecords.find();
       console.log("records showed");
        res.status(200).json(records);


    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})
router.get('/:performancetype',async(req,res)=>{
    try{
        const performancetype=req.params.performancetype;
        if(performancetype=='hit'||performancetype=='flop'){
         const response=await movierecords.find({performance:performancetype});
         console.log("data feteched");
         res.status(200).json(response);
        }
    
        else{
            res.status(404).json({error:'invaild performancetype'});
        }
    
    }
    catch(err){
        res.status(500).json({error:'internal  error , try again with correct data'});
    }


    
})


module.exports=router;
