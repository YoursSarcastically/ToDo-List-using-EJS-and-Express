const express=require("express");
const bodyParser=require("body-parser");
const { render } = require("ejs");
const app=express();


app.set("view engine","ejs")

app.use(express.static(__dirname + '/public'));

var item="";

var itemarray=["Wake up! ☀️","Be awesome 😎 ","Sleep 😴"];

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
var today= new Date();
var options={
    weekday:"long",
    day:"numeric",
    month:"long"
};
var day= today.toLocaleDateString("en-US",options)

res.render("list",
{
    dayhtml: day,newitem: itemarray});

});


app.post("/",function(req,res){
    item=(req.body.newItem);
  itemarray.push(item)

   res.redirect("/")
})


app.listen(3000,function(){
    console.log("App running")
});