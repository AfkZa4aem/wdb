											// METHODS

// document comes with a bunch of methods for selecting elements. 
// we're goint to learn about the following 5:


// Takes a string argument and returns the one element
// with a matching ID
document.getElementById("idName")

// Takes a string argument and returns a list of elements
// that have a matching class
// will return NodeList, looks like an array, but it isn't
document.getElementByClassName("className")

// Returns a list of all elements of a given tag name,
// like <li> or <h1>
document.getElementsByTagName("tagName")

// Retutns the first element that matches a given CSS-style selector
// ("#selectorName")  (".className")  ("tagName") ("li a.special")
// ("h1 + special") - take the first one after h1 tag
document.querySelector("#selectorName")

// Returns a list of elements that matches a given CSS-style selector
document.querySelectorAll("#selectorName")