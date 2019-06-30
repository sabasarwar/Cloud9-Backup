var express=require("express");
var app=express();

app.use(express.static("public")); 
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/fallinlove/:thing", function(req, res){
    var thing=req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/post", function(req, res){
    var posts=[
        {title: "Post 1", author:"tss"},
        {title: "Post 2", author:"saba"},
        {title: "Post 3", author:"zeba"},
        {title: "Post 4", author:"baby"}
        ];
        res.render("posts", {postsVar: posts});
})

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started"); 
});