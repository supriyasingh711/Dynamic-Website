const mongoose=require('mongoose')

const credential=mongoose.Schema({
    emailid:String,
    contactNumber:String,
    query:String

})
module.exports=mongoose.model("credential",credential)