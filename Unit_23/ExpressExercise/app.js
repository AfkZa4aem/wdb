var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi There, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal.toLowerCase();
	phrases = {
		pig: 'Oink',
		cow: 'Moo',
		dog: 'Woof Woof!'
	};
	res.send("The " + animal + " says " + "'" + phrases[animal] + "'");
});

app.get("/repeat/:word/:num", function(req, res){
	var word = req.params.word;
	var num = req.params.num;
	res.send((word + " ").repeat(num));
})

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});

// Listen

app.listen(3000, function(){
    console.log("Server has started!");
});