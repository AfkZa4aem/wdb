var someObject = {};

// Which of the following are valid:

someObject._name = "Hedwig";		// VALID, but not a great idea

someObject.age = 6;							// VALID

var prop = "color";							
someObject[prop] = "red";				// VALID

someObject.123 = true;					// INVALID