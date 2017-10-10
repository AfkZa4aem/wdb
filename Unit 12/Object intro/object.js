var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};

// object store data in key-value pairs

						// RETREIVING DATA

// bracket notation, similar to arrays:
console.log(person["name"]);
// dot.notation:
console.log(person.name);


// you cannot use dot notation if the property starts with a number
someObject.1blah 		// INVALID
someObject["1blah"] // VALID!

// you can lookup using a variable with bracket notation
var str = "name";
someObject.str 			// doesn't look for "name"
someObject[str]			// does evaluate str and looks for "name"

// you cannot use dot notation for property names with spaces
someObject.fav color					// INVALID
someObject["fav color"]				// VALID


						// UPDATING DATA

var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};

// to update age
person["age"] += 1;
// to update city
person.city = "London";

						// CREATING OBJECT

// make an empty object and then add to it
var person = {};
person.name = "Travis";
person.age = 21;
person.city = "LA";

// all at once
var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};

// another way of initializing an Object
ver person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

							// OBJECTS

// can hold all sorts of data
var junkObject = {
	age: 57,
	color: "purple",
	isHungry: true,
	friends: ["Horatio", "Hamlet"],
	pet: {
		name: "Rusty",
		species: "Dog",
		age: 2
	}
};