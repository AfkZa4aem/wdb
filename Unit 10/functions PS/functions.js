// function isEven(number) {
// 	if(number % 2 === 0){
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// Colt solution
function isEven(num) {
	return num % 2 === 0;
}

// function factorial(number) {
// 	if(number === 0) {
// 		return 1;
// 	}
// 	else {
// 		var x = 1;
// 		for(var i = number; i >= 1; i--) {
// 			x *= i;
// 		}
// 		return x;
// 	}
// }

// Colt solution
function factorial(num) {
	// define a result var
	var result = 1;
	// calculate factorial and store value in result
	for(var i = 2; i <= num; i++) {
		result *= i;
	}
	// return the result var
	return result;
}

// function kebabToSnake(string) {
// 	if(string.indexOf !== -1) {
// 		var res = string.replace(/-/g, "_");
// 		return res;
// 	}
// 	else {
// 		return string;
// 	}
// }

// Colt solution
function kebabToSnake(str) {
	// replace all '-' with '_'
	var newStr = str.replace(/-/g, "_");
	// return str
	return newStr;
}