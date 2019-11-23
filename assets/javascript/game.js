var vowels = ["a", "e", "i", "o", "u"]
// Array that will contain all vowels/letters.

var lettersGuessed = [];
// Array that will hold what the user guessed.

var randomLetter = null;
// Holds the random letter to be guessed.

var guessesLeft = 3;
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
    randomLetter = vowels[Math.floor(Math.random() * vowels.length)];
};

var updateLettersGuessed = function() {
    // Function used to update the letters the user has guessed.
    document.querySelector("#letters-guessed").innerHTML = lettersGuessed.join(", ");

};

var removeLettersGuessed = function() {

    document.querySelector("#letters-guessed").innerHTML = "";
};

// Function used to reset the game.
var reset = function() {
    guessesLeft = 3;
    randomLetter = [];
    updateGuessesLeft();
    updateLetterToGuess();
    // updateLettersGuessed().innerHTML = lettersGuessed.remove();
    removeLettersGuessed();
};

// Execute on page load.
    updateGuessesLeft();
    updateLetterToGuess();
    


document.onkeydown = function (event) {
    // Will decrement guesses left by 1.
    guessesLeft--;
    // Will automatically convert letters to lower case.
    var vowels = event.key.toLowerCase();
    // Will push all letters guessed into the lettersGuessed array.
    lettersGuessed.push(vowels);

    // Will execute both functions that will pass through the DOM elements.
    updateGuessesLeft();
    updateLettersGuessed();


    if (vowels === randomLetter) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;

        reset();
    }

    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        reset();
    }



};