var button = document.querySelector("button");
var paragraph = document.querySelector("p");

// Setup click listener
button.addEventListener("click", function() {
	paragraph.textContent = "Someoone Clicked the Button!";
});