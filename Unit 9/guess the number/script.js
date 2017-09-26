// create secret number
var number = 5;

// ask user for guess
var userNumber = Number(prompt("Guess the number"));

// check guess
if(userNumber === number) {
	alert("Bingo!");
}
else if(userNumber < number) {
	alert("Higher");
}
else {
	alert("Lower");
}
