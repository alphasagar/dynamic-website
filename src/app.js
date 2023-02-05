const express = require('express');
const mongoose = require('mongoose');
const app = express();
const hbs = require('hbs'); 
const routes = require('./routes/main.js');
const Detail = require("./models/Detail")
mongoose.set('strictQuery', true);


app.use("/static",express.static("public"));
app.use('',routes)

// template engine hbs

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")


//dB connections
mongoose.connect("mongodb://localhost/website",()=>{
    console.log("dB connected")
    // Detail.create({
    //     brandName:"Sagar's Blog",
    //     brandIconUrl:"public/images/icon.jpg",
    //     links:[
    //         {
    //         label:"Home",
    //         url:"/"
    //     },
    //     {
    //         label:"Services",
    //         url:"/services"
    //     },
    //     {
    //         label:"Gallery",
    //         url:"/gallery"
    //     },
    
    //     {
    //         label:"About",
    //         url:"/about"
    //     },
    
    //     {
    //         label:"Contact Us",
    //         url:"/contact-us"
    //     },
    
    
    // ]
    // })
})

app.listen(3000,()=>{
    console.log("server started");
}) 