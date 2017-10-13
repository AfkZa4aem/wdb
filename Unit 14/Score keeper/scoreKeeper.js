// firts player variables
var p1Button = document.querySelector("#p1");
var p1Score = 0;
var p1Display = document.querySelector("#p1Display");
// second player variables
var p2Button = document.getElementById("p2");
var p2Score = 0;
var p2Display = document.getElementById("p2Display");
// reset button variables
var resetButton = document.getElementById("reset");
var finalScore = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var gameOver = false;
var winningScore = 5;

// get number from input for final score
finalScore.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})

// first player button event
p1Button.addEventListener("click", function(){
	// check gameOver status
	if(!gameOver){
		p1Score++;
		// if player get final score => win, game over
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
})

// second player button event
p2Button.addEventListener("click", function(){
	// check gameOver status
	if(!gameOver){
		p2Score++;
		// if player get final score => win, game over
		if(p2Score === winningScore){
			gameOver = true
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}	
})

// reset button event
resetButton.addEventListener("click", function(){
	reset();
})

// reset function
function reset(){
	// clear p1 data
	p1Score = 0;
	p1Display.textContent = p1Score;
	p1Display.classList.remove("winner");
	// clear p2 data
	p2Score = 0;
	p2Display.textContent = p2Score;
	p2Display.classList.remove("winner");
	// change gameOver status
	gameOver = false;
}