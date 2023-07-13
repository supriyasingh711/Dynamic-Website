const express=require('express')
const routes=express.Router()
const detail=require("../models/detail")
const slider=require("../models/model")
const service=require("../models/service")


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
module.exports=routes