					Click
quick and easy way to add a click listener to element(s)

prints when item with id 'submit' is clicked
$("#submit").click(function(){
	console.log("Another click");
})

alerts when ANY button is clicked
$("button").click(function(){
	alert("Someone clicked a button")
})


					Keypress
Add keypress listener

listen for any keypress in any text input
$('input[type="text"]').keypress(function(){
	alert("text input keypress!");
})


					On
similar to addEventListener it lets specify the type of event
to listen for.

prints when item with id 'submit' is clicked
$("#submit").on('click', function(){
	console.log("Another click");
});

alerts when any button is clicked
$('button').on('click', function(){
	console.log('button clicked');
});

double click event
$("button").on("dblclick", function(){
	alert("doublr clicked!");
});

drag start event
$("a").on("dragstart", function(){
	console.log("Drag started");
});

keypress event
$('input[type="text"]').on("keypress", function(){
	alert("key press in an input!");
});




			- click() only adds listeners for existing elements
			-on('click') will add listeners for all potential future elements
