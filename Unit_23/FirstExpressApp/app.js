var express = require("express");
var app = express();

// '/' => "Hi there!"
app.get("/", function(req, res){ // request, response both objects
    // request - information about request
    // response - information about response
    res.send("Hi There!");
});
// '/bye' => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});
// '/dogs' => "MEOW!"
app.get("/dogs", function(req, res){
    console.log("request made");
    res.send("MEOW!");
});
// add route with pattern (:)
app.get("/r/:subredditName", function(req, res){
	// get request params
	var subreddit = req.params.subredditName;
	// use request data for h1
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
	console.log(req.params);
	res.send("YOU ARE TOO DEEP!!!")
});

app.get("*", function(req, res){
	res.send("YOU ARE A STAR!!!");
});


// Tell Express to listen for requests (start server)

app.listen(3000, function(){
    console.log("Server has started!");
});