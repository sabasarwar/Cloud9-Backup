var express=require("express");
var app=express();

//ROUTE 01
app.get("/", function(req, res){
    res.send("Hi there!!! Welcome to my first assignment.");
});

//ROUTE 02
app.get("/speak/:animal", function(req, res){
    var sounds={
        pig:"oink",
        cow:"moo",
        dog:"woof",
        cat:"meow",
        fish:".........."
    }
    var animal = req.params.animal.toLowerCase();
    var sound=sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
    
});

//ROUTE 03
app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for( var i=0 ; i<times ; i++)
    {
        result += message + "  ";
    }
    res.send(result);
});

//ROUTE 04
app.get("*", function(req, res) {
    res.send("Sorry page not found !!!   What are you doing with your life ??");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});