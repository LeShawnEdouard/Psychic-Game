



// Using the "DOMContentLoaded" event handler to start the game upon page load
// document.addEventListener("DOMContentLoaded", function(event) {
// Variables used to set our default values when the game begins     
var wins = 0;
var losses = 0;
var livesLeft = 10;
var compGuess = "";
var userGuess = "";

var vowels = ["a", "e", "i", "o", "u"]
console.log(wins, losses, livesLeft);

// This is the flow of events

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