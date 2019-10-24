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


// The following functions will update updateGuessesLeft, updateLetterToGuess, and updateLettersGuessed.
var updateGuessesLeft = function() {
    // Function used to update the number of guesses left.
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
    // Function used to randomize a letter from the vowels array and assign it to the variable.
    getComputerGuess = vowels[Math.floor(Math.random() * vowels.length)];
};

var updateLettersGuessed = function() {
    // Function used to update the letters the user has guessed.
    document.querySelector("letters-guessed").innerHTML = lettersGuessed.join(", ");
};

var reset = function() {
    guessesLeft = 10;
    lettersGuessed = [];
    updateGuessesLeft();
    updateLetterToGuess();
    updateLettersGuessed();
};





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



function getComputerGuess() {
    compGuess = vowels[Math.floor(Math.random() * vowels.length)];
    console.log("compGuess" , compGuess);
}




// })