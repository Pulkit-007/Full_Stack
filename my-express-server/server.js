//jshint esversion:6

const express=require("express");

const app=express();


app.get("/",function(request,response) {
    response.send("<h1>HEllo World!!!!</h1>");
    
})


app.get("/contact",function(request,response){
    response.send("You can contact me at pulkits94125@gmail.com");

});

app.get("/about",function(request,response){
    response.send("My name is Pulkit Sharma and i love to play Xbox...");
})

app.get("/hobbies",function(request,response){
    response.send("<ul><li> Code</li><li>Coffee</li></ul>");
})



app.listen(3000,function(){
    console.log("server startedd/....")

});
