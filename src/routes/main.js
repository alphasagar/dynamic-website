const { request, response } = require('express');
const express = require('express');

const Detail = require("../models/Detail")

const routes = express.Router();

routes.get("/",async (req,res)=>{

    const details = await Detail.findOne({"_id":"63dd30452b8d01483faad5d5"})  
    // console.log(details);
    res.render("index",{
        details:details
    })
})


routes.get("/gallery",async (req,res)=>{

    const details = await Detail.findOne({"_id":"63dd30452b8d01483faad5d5"}) 
    res.render("gallery",{
        details:details
    })
})




module.exports=routes