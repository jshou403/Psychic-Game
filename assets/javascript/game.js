var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessed = [ ];

var guessesDisplay = document.getElementById("guessesleft-text");
var lettersDisplay = document.getElementById("lettersguessed-text");
var winDisplay = document.getElementById("win-text");
var lossDisplay = document.getElementById("loss-text");

// generate random item from computerChoice array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// when the user presses a key, store the key
document.onkeyup = function (event) {
    var userGuess = event.key;

    // then compare the user's letter and the computer's letter
    // using: if, else if, else
        // 1 - IF - user guess does match computer guess 
            // 1 - A - if  - guesses left is 0 
            // 1 - B - else if - user guess matches one in the array (NOT ADDED)
        // 2 - ELSE IF - user guess does not match computer guess

    // [if] if the userGuess doesn't match the computer guess
    if (userGuess !== computerGuess) {
        // decrease guesses left by 1
        guessesLeft--;
        // display guesses left 
        guessesDisplay.textContent = guessesLeft; 
        // add userGuess to the lettersguessed array
        lettersGuessed.push(userGuess);
        // display letters guessed 
        lettersDisplay.textContent = lettersGuessed;

            // test and debug
            console.log("my guess = " + userGuess);
            console.log("computer guess = " + computerGuess);
            console.log("guesses left = " + guessesLeft);
            console.log("letters guessed: " + lettersGuessed);
            console.log("--------------------");

        // [if] if the guessesLeft = 0
        if (guessesLeft == 0) {
        // increase lossCount by 1
        lossCount++;
        // display lossCount 
        lossDisplay.textContent = lossCount;
        // reset guessLeft
        guessesLeft = 9;
        // display guessesLeft 
        guessesDisplay.textContent = guessesLeft;
        // reset lettersGuessed array
        lettersGuessed = [];
        // display lettersGuessed
        lettersDisplay.textContent = lettersGuessed;

        // generate new random letter
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

                // test and debug
                // console.log("WINS - " + winCount);
                // console.log("LOSS - " + lossCount);
                // console.log("new computer letter = " + computerGuess)
                // console.log("guesses left: " + guessesLeft);
                // console.log("letters guessed: " + lettersGuessed);
                // console.log("--------------------");
        }
    }

    // [else] if the user's letter DOES match the computers letter
    else if (userGuess === computerGuess) {
        // increase winCount by 1
        winCount++;
        // display winCount 
        winDisplay.textContent = winCount;
        // reset guessesLeft
        guessesLeft = 9;
        // display guessesLeft
        guessesDisplay.textContent = guessesLeft;
        // reset lettersGuessed array
        lettersGuessed = [];
        // display letters guessed 
        lettersDisplay.textContent = lettersGuessed;
        // generate new random letter
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            // test and debug
            // console.log("WINS = " + winCount);
            // console.log("LOSS = " + lossCount);
            // console.log("new computer letter = " + computerGuess);
            // console.log("guesses left: " + guessesLeft);
            // console.log("letters guessed: " + lettersGuessed);
            // console.log("--------------------");
    }
}