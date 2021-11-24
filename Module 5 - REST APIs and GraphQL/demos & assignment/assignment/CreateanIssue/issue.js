const express = require("express");
const router = express.Router();
const chalk = require("chalk");
const bodyparser = require("body-parser");
const db = require("../CreateanIssue/db");
const fetch =require("node-fetch");

router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());
var baseUrl = "http://localhost:4500";

router.get("/getlist",(req,res)=>{
   db.find({},(err,data)=>{
      console.log("The Data from db is ");
      console.log(data);
      res.send(data);
   });
});

// router.get("/create",(req,res)=>{


router.get("/create",(req,res)=>{

 fetch(baseUrl+"/issue/getlist").then((response)=>
    response.json()
 ).then((data)=>{
    var arrdata = data;
    if(arrdata!=""){
    for(var i=0;i<arrdata.length;i++){
      var reporteddate = new Date(arrdata[i].reporteddate); 
      var date2 = new Date(); 
      var currentdate = (date2.getMonth()+1)+'/'+date2.getDate()+'/'+date2.getFullYear();
      var currdate = new Date(currentdate);
      console.log("Current date is ",currentdate);
      var Difference_In_Time = currdate.getTime() - reporteddate.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 60 * 60 * 24);
      arrdata[i].difference = Difference_In_Days;
      }
      console.log("The difference is ");
      console.log(arrdata[0].difference);
   }
   res.render("CreateBug",{details: arrdata});
 });
});



router.post("/issueslist",(req,res)=>{

var bugtitle = req.body.title;
var bugdesc = req.body.description;
var bugassignee = req.body.assignee;
console.log("The bug title is ");
console.log(bugtitle);
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

   db.collection.insertOne({title:bugtitle,description:bugdesc,assignee: bugassignee,reporteddate:date,reportedtime:time},(err,data)=>{
   });





});



module.exports = router;