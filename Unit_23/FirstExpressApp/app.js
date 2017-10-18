var express = require("express");
var app = express();

// '/' => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi There!");
});
// '/bye' => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
})
// '/dogs' => "MEOW!"
app.get("/dogs", function(req, res){
    console.log("request made");
    res.send("MEOW!");
})


// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});