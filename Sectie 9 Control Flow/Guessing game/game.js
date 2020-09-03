//create sectretNumber
const sectretNumber = 4;

//ask user for guess
const stringGuess = prompt("Guess a number");
const guess = Number(stringGuess);

//check if guess is right
if(guess === sectretNumber) {
	alert("You got it right");
}

//otherwise, check if guess is higher
else if(guess > sectretNumber) {
	alert("To high, Guess again");
}

//otherwise, check if lower
else {
	alert("Guess again to low");
}




