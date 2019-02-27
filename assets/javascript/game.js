var wins = 0; // Shows the user # of wins he/she has earned //
    var losses = 0; // Shows the user # of losses he/she has earned //
    var guesses = 10; // Shows the user # of guesses he/she has //
    
    

    // Variables to reference id from DOM //
    var winTotal = document.getElementById("win-total");
    var lossTotal = document.getElementById("loss-total");
    var guessLeft = document.getElementById("guesses");

    var vls = {
        vowels: ['a', 'e', 'i', 'o', 'u'], // Array of vowels to chose from //
        getVowels: function(){
            var randomLetter = this.vowels.length[Math.floor(Math.random() * this.vowels.length)];
        }
    }
    vls.getVowels();
    console.log(vls);

    function gameFunction(randomLetter) {
        winTotal.textContent = wins;
        lossTotal.textContent = losses;
        guessLeft.textContent = guesses;
        if (onkeypress === vowels[i]) {
            wins++;
            guesses--;
        }
    }
    document.onkeypress = gameFunction;







    // function getRandomVowel() {
    //     // Used to randomly select a letter to guess //
    //     var randomLetter = vowels.length[Math.floor(Math.random() * vowels.length)];
    //     return randomLetter;
    // }
    // console.log(getRandomVowel());

    // function gameFunction(randomLetter) {
    //     winTotal.textContent = wins;
    //     lossTotal.textContent = losses;
    //     guessLeft.textContent = guesses;
    //     if (onkeypress === vowels[i]) {
    //         wins++;
    //         guesses--;
    //     }
    // }
    // document.onkeypress = gameFunction;
    


    // document.onkey = function(event) {
    //     for (i = 0; i < letters.length; i++) {
    //         if (event.key === [i]) wins++;
    //     }
    //     guesses--;
    //     userText.textContent += event.key;
    //     guessLeft.textContent = guesses;
    // }


    // // function that holds variables ... //
    // function gameFunction(event) {
    //     if (event.keyCode >= 65 && event.keyCode <= 90) {
    //         alert('This is a test');
    //     }
    //     for (var j = 0; j < favTVshows.length; j++) {
    //         guessLeft = guesses;
    //         lossTotal = losses;
    //         winTotal = wins;
    //     }

    // }