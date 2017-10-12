								// STYLE

// the style property is one way to manipulate an element's style

// Select
var tag = document.getElementById("highlight");

// manipulate 
// bad practice
tag.style = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

		// An Alternative

/* DEFINE A CLASS IN CSS*/
.some-class {
	color: blue;
	border: 10px solid red;
}

var tag = document.getEleentById("highlight");
// ADD THE NEW CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");

		// classList

// A read-only list that contains the classes for a given element.
// It is not an array

/* DEFINE A CLASS IN CSS */
.another-class {
	color: purple;
	fontSize: 76px;
}

var tag = document.querySelector("h1");

// ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add("another-class");

// REMOVE A CLASS
tag.classList.remove("another-class");

// TOGGLE A CLASS
tag.classList.toggle("another-class");