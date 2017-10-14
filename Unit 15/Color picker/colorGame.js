// create array of colors
var colors = generateRandomColors(6);

// pick all divs to array
var squares = document.querySelectorAll(".square");
// use one of the arrays as "picked"
var pickedColor = pickColor();
// add variable for span
var colorDisplay = document.getElementById("colorDisplay");

var message = document.getElementById("message");

var h1 = document.querySelector("h1");

// change <span> text content 
colorDisplay.textContent = pickedColor;

// iterate colors array
for(var i = 0; i < squares.length; i++){
	// add initial colors ro squares
	squares[i].style.backgroundColor = colors[i];

	// click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if(clickedColor === pickedColor){
			message.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again"
		}
	});
}

function changeColors(color){
	// loop through all squares
	for(i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors to array
	for(var i = 0; i < num; i++){
		// get random color and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	// "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")"
}
