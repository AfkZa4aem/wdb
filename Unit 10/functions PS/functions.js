function isEven(number) {
	if(number % 2 === 0){
		return true;
	}
	else {
		return false;
	}
}

function factorial(number) {
	if(number === 0) {
		return 1;
	}
	else {
		var x = 1;
		for(var i = number; i >= 1; i--) {
			x *= i;
		}
		return x;
	}
}

function kebabToSnake(string) {
	if(string.indexOf !== -1) {
		var res = string.replace(/-/g, "_");
		return res;
	}
	else {
		return string;
	}
}