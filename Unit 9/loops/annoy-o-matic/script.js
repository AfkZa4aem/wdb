var answer = prompt("Are we there yet?");

// check answer for the "yes"/"yeah" in answer
while(answer.indexOf("yes") < 0 && answer.indexOf("yeah") < 0) {
	var answer = prompt("Are we there yet?");
}

alert("Yay, we finally made it!");