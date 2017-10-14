// create array of colors
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

// pick all divs to array
var squares = document.querySelectorAll(".square");
// use one of the arrays as "picked"
var pickedColor = colors[3];
// add variable for span
var colorDisplay = document.getElementById("colorDisplay");

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
			alert("Correct!");
		}
		else {
			alert("Wrong!");
		}
	});
}
