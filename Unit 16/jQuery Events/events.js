										// Click

// give alert when h1 clicked
$("h1").click(function(){
	alert("h1 clicked");
});

// give alert when button clicked
$("button").click(function(){
	alert("Button clicked");
});

// change button background when clicked
$("button").click(function(){
	$(this).css("background", "pink");
});

// console.log button text when clicked
$("button").click(function(){
	vat text = $(this).text();
	console.log("You clicked " + text);
});


										// Keypress

// console.log some text
$("input").keypress(function(){
	console.log("You pressed a key!");
});

// console.log event (event - placeholder)
$("input").keypress(function(event){
	console.log(event);
});

// give alert when only "Enter" button pressed
// (event - placeholder)
$("input").keypress(function(event){
	if(event.which === 13){
		alert("You hit enter!");
	}
});


										// On

// change h1 color
$("h1").on("click", function(){
	$(this).css("color", "red");
});

// change all h1 color
$("h1").on("click", function(){
	$("h1").css("color", "red");
})

// mouse hover button
$("button").on("mouseenter", function(){
	console.log("mouse enter");
});

// bold font when mouse enter button
$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
});


// normal font when mouse leave button
$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});
