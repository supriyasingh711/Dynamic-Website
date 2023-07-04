const express=require("express")
const hbs=require('hbs')
const app=express()
app.listen(process.env.PORT | 5556,()=>{
    console.log("SERVER STARTED")

})
const routes=require('./routes/main')
app.use('',routes)
app.use('/static',express.static("public"))
//template engine
app.set('view engine','hbs')
app.set('views','views')
