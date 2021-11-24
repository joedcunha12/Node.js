const app = require("./app");
const chalk = require("chalk");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static(__dirname+"/public"));


app.get("/",(req,res)=>{

        res.render("homepage");
});



app.listen(4500,()=>{
    mongoose.connect("mongodb://localhost:27017/local");
    console.log("App is running on port 4500");
});

