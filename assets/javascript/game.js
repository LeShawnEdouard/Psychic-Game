var vowels = ["a", "e", "i", "o", "u"]
// Array that will contain all vowels/letters.

var lettersGuessed = [];
// Array that will hold what the user guessed.

var computerGuess = null;
// Holds the random letter to be guessed.

var guessesLeft = 10;
// Default number of guesses the user has.

var wins = 0;
var losses = 0;
// Default number of wins/losses at start of the game.

var updateGuessesLeft = function() {
    // Function used to update the number of guesses left.
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
}




getComputerGuess() // Update value of compGuess
screenManager()
document.onkeyup = function (event) {
    userGuess = event.key;
    if(userGuess === compGuess) {
        wins ++;
        alert("You have won!!!");
    }
    else {
        livesLeft --;
    }
    if(livesLeft < 1) {
        losses ++;
        alert("Sorry dude. You suck! The correct letter is" + " " + compGuess)
    }
    screenManager() // set variable values to HTML
}



// Functions go here
function screenManager() {
    document.querySelector("#win-total").innerHTML = wins;
    document.querySelector("#loss-total").innerHTML = losses;
    document.querySelector("#lives-left").innerHTML = livesLeft;
    // document.querySelector("#computer-guess").innerHTML = compGuess;
    document.querySelector("#user-guess").innerHTML = userGuess;
    document.querySelector("#already-guessed").innerHTML += userGuess;
}

function getComputerGuess() {
    compGuess = vowels[Math.floor(Math.random() * vowels.length)];
    console.log("compGuess" , compGuess);
}




// })