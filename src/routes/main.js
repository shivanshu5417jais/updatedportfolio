const express=require('express')
const routes=express.Router()

const Detail=require("../models/Detail")
const Slider=require("../models/Slider")
const Services=require("../models/Service")
const Contact=require("../models/Contact")
const { Router } = require('express')
routes.get("/",async (req,res)=>{
   const details= await Detail.findOne({"_id":"63e46d4d5c3d1c49d7089022"});
   const slides= await Slider.find();
   const services= await Services.find();
   console.log(details);   
   console.log(slides); 
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})

routes.get("/gallery",async (req,res)=>{
    const details= await Detail.findOne({"_id":"63e46d4d5c3d1c49d7089022"});
    const slides= await Slider.find();
    const services= await Services.find();
   console.log(details);   
   console.log(slides); 
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})

routes.post("/process-contact-form",async(req,res)=>{
    console.log("Form is sumitted");
    console.log(req.body);
    try{
const data=await Contact.create(req.body)
console.log(data );
res.redirect('/')
    }
    catch(e){
        console.log(e);
        res.redirect('/')
    }
})

module.exports=routes;
