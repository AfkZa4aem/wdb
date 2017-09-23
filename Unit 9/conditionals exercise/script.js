var userAge = prompt("How old are you?");

if (userAge < 0) {
	console.log("Error: age can not be less then 0");
}
else if (userAge == 21) {
	console.log("Happy 21st birthday!!");
}
else if (userAge % 2 == 1) {
	console.log("Your age is odd!");
}

if (userAge === 4 || 9 || 16 || 25 || 36 || 49 || 64 || 81 || 100) {
	console.log("perfect square");
}