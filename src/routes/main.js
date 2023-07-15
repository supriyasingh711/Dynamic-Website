const express=require('express')
const routes=express.Router()
const detail=require("../models/detail")
const slider=require("../models/model")
const service=require("../models/service")
const credential=require("../models/credential")


routes.get("/",async(req,res)=>{
    const details=await detail.findOne({"_id":"64aaf9f67fcf0a47c01cd178"})
// console.log(details)
const slides=await slider.find()
// console.log(slides)
const services=await service.find()

    



res.render("index",{
        details:details,
        slides:slides,
        services:services
    })


})

routes.post("/process-contact-form",(request,response)=>{
    console.log("form is submitted")
    console.log(request.body)
    //save data to database
    try{
        const data=credential.create(request.body)
        console.log(data)
        response.redirect("/")
        
    }catch(e){
        console.log(e)
        
        response.redirect("/")

    }
})


module.exports=routes

