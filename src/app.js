const express=require("express")
const hbs=require('hbs')
const app=express()
const mongoose=require('mongoose')
const detail=require("../src/models/detail")
const slider=require("../src/models/model")
const service=require("../src/models/service")




app.listen(process.env.PORT | 5556,()=>{
    console.log("SERVER STARTED")

})
const routes=require('./routes/main')
app.use('',routes)
app.use('/static',express.static("public"))
//template engine
app.set('view engine','hbs')
app.set('views','views')
// const connectDB = require('./db');


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://localhost:27017/dynamicWebsite`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
      // detail.create(
        
      //   {
      //     brandName:"supriya solutions",
      //     brandIconUrl:"https://seeklogo.com/images/B/black-panther-icon-logo-E5CD7FEC30-seeklogo.com.png",
      //     links:[
      //       {
      //         label:"home",
      //         url:"/"
      //       },{
      //         label:"Services",
      //         url:"/services"
      //       }
      //     ]
      //   }
      // )
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  connectDB();
  //setting up partials
  hbs.registerPartials('views/partials')


  //slider connection
  // slider.create([
  //   {
  //     title:'web Developer',
  //     subtitle:'Creating dynamic websites with complete admin access',
  //     imageurl:"/static/imgs/best.jpg"
    
  //   },
  //   {
  //     title:'App Developer',
  //     subtitle:'Applications which are easy to use!',
  //     imageurl:"/static/imgs/best2.jpg"
    
  //   },
  //   {
  //     title:'Youtuber',
  //     subtitle:'Sharing my knowledge with everyone.',
  //     imageurl:"/static/imgs/best3.jpg"
    
  //   }
  // ])
  //service connection giving data to collection service
// service.create([
//   {
//     icon:'fas fa-user-check',
//     title:'best solutions',
//     description:'the best solutions for your technical problems.',
//     linktext:'Check',
//     link:'https://getbootstrap.com/docs/4.1/components/card/'
//   },
//   {
//     icon:'far fa-edit',
//     title:'support',
//     description:'24x7 support to customers',
//     linktext:'contact us',
//     link:'https://getbootstrap.com/docs/4.1/components/card/'
//   },
//   {
//     icon:'fas fa-sync',
//     title:'AI Solutions',
//     description:'Let the machine do your work!',
//     linktext:'Learn More',
//     link:'https://getbootstrap.com/docs/4.1/components/card/'
//   },
//   {
//     icon:'fas fa-truck-moving',
//     title:'On-Time Delivery',
//     description:'We value your time.',
//     linktext:'More',
//     link:'https://getbootstrap.com/docs/4.1/components/card/'
//   },
//   {
//     icon:'fas fa-tv',
//     title:'Websites Developer',
//     description:'Fully dynamic database integrated websites.',
//     linktext:'projects',
//     link:'https://getbootstrap.com/docs/4.1/components/card/'
//   },
//   {
//     icon:'fas fa-mobile',
//     title:'App Development',
//     description:'Apps make your business easier.',
//     linktext:'Go to App',
//     link:'https://getbootstrap.com/docs/4.1/components/card/'
//   },

// ])