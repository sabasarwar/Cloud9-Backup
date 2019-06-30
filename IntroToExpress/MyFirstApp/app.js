var express=require("express");
var app=express();

// "/" : hi there
app.get("/", function(req,res){
    res.send("Hi There....");
})

// "/bye" : bye
app.get("/bye",function(req,res){
    res.send("Bye Everyone");
})

// "/dogs" : woof
app.get("/dogs", function(req,res){
    res.send("Woof!!!!");
})

app.get("/r/:username", function(req, res){
    var name=req.params.username;
    res.send("Hey!!!!!  " + name + " Welcome to your Facebook Account");
})

app.get("*", function(req, res){
    res.send("You are a star..................");
})



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
})
