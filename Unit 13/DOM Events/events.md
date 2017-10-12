				EVENTS

				The Syntax

element.addEventListener(type, functionToCall);

var button = document.querySelector("button");
button.addEventListener("click", function() {
	console.log("SOMEONE CLICKED THE BUTTON!");
});

we can also rewrite it using a named function

button.addEventListener("click", showLog);

function showLog() {
	console.log("SOMEONE CLICKED THE BUTTON!");
}





We can use more than one listeners for each element

We can add events for a bunch of elements

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
}
