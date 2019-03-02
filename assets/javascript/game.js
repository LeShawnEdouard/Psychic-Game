document.addEventListener("DOMContentLoaded", function(event) {

    var wins = 0; // Shows the user # of wins he/she has earned //
    var losses = 0; // Shows the user # of losses he/she has earned //
    var guesses = 10; // Shows the user # of guesses he/she has //
    var compGuess = "";
    var guessDisplay = "";
    

    // Variables to reference id from DOM //
    var winTotal = document.getElementById("win-total");
    var lossTotal = document.getElementById("loss-total");
    var guessLeft = document.getElementById("guesses");
    // var computerGuess = document.getElementById("computer-guess");
    var useGuess = document.getElementById("use-guess");

    // Function to match keypress with random vowel by the computer //
    document.onkeyup = function(event) {
        
        var vls = {
            vowels: ['a', 'e', 'i', 'o', 'u'], // Array of vowels to chose from //
            getVowels: function(){console.log(this.vowels.length)
                var randomLetter = this.vowels[Math.floor(Math.random() * this.vowels.length)];
                    return randomLetter;
            }
        }
        var computerGuess = document.getElementById("computer-guess");
        var userGuess = event.key;
        console.log(userGuess)
        winTotal.textContent = wins;
        lossTotal.textContent = losses;
        guessLeft.textContent = guesses;
        computerGuess.textContent = compGuess;
        useGuess.textContent = guessDisplay;
        // if (event.key === vowels[i]) {
        //     wins++;
        //     guesses--;
        // }else {
        //     losses++;
        // }    
        vls.getVowels();
        console.log(vls);
        var computerGuess = vls.getVowels()    
    }
});