var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessed = [];

// generate random item from computerChoice array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// when the user presses a key, store the key
document.onkeyup = function (event) {
    var userGuess = event.key;

    // then compare the user's letter and the computer's letter
    // [3 scenarios - if, else if, else]

    // [if] if the userGuess doesn't match the computer guess
    if (userGuess !== computerGuess) {
        // decrease guesses left by 1
        guessesLeft--;
        // add userGuess to the lettersguessed array
        lettersGuessed.push(userGuess);

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
        // reset guessLeft
        guessesLeft = 9;
        // reset lettersGuessed array
        lettersGuessed = [];
        // generate new random letter
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

                // test and debug
                console.log("WINS - " + winCount);
                console.log("LOSS - " + lossCount);
                console.log("new computer letter = " + computerGuess)
                console.log("guesses left: " + guessesLeft);
                console.log("letters guessed: " + lettersGuessed);
                console.log("--------------------");
        }
    }

    // [else] if the user's letter DOES match the computers letter
    else if (userGuess === computerGuess) {
        // increase winCount by 1
        winCount++;
        // reset guessesLeft
        guessesLeft = 9;
        // reset lettersGuessed array
        lettersGuessed = [];
        // generate new random letter
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            // test and debug
            console.log("WINS = " + winCount);
            console.log("LOSS = " + lossCount);
            console.log("new computer letter = " + computerGuess);
            console.log("guesses left: " + guessesLeft);
            console.log("letters guessed: " + lettersGuessed);
            console.log("--------------------");
    }
}