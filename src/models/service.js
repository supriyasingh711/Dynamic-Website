const mongoose=require("mongoose")

const service=mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linktext:String,
    link:String

})
module.exports=mongoose.model("service",service)