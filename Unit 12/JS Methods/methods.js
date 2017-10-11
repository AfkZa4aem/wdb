var obj = {
	name: "Chuk",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"],
	add: function(x, y){
		return x + y;
	}
}

// function call will look like
obj.add(3, 1);

function speak(){
	return "WOOF!";
}

function speak(){
	return "MEOW!";
}

// we get namespace collision

var dogSpace = {};
dogSpace.speak = function(){
	return "WOOF!";
}

var catSpace = {};
catSpace.speak = function(){
	return "MEOW!";
}


							// The Keyword "this"

var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];

function print(arr){
	arr.forEach(function(el){
		console.log(el);
	})
}

// add this
// in this case "this" will link to comments.data itself

comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	})
}
