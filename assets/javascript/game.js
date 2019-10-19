var winCount = 0;
var lossCount = 0;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessed = [];
var guessesLeft = 9;

// when the user presses a key, store the key
document.onkeyup = function (event) {
    var userGuess = event.key; 

    // and generate random item from computerChoice array 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 

    // compare the user's letter and the computer's letter 
    // [3 scenarios - if, else if, else]

    // [if] if the userGuess doesn't match the computer guess
    if (userGuess !== computerGuess) {
        // decrease guesses left by 1
        guessesLeft--;
        // add userGuess to the lettersguessed array
        // lettersGuessed = (lettersGuessed + userGuess);
        lettersGuessed.push(userGuess);

        // test and debug
        console.log (userGuess);
        console.log (computerGuess);
        console.log(guessesLeft);
        console.log(lettersGuessed);

            // [if] if the guessesLeft = 0
            // if (guessesLeft == 0) {
            // increase lossCount by 1
            // lossCount++;
            // reset guessLeft
            // 
            // reset lettersGuessed array
            // 
            //}
    } 
    // [else if] if the userGuess is already in the array 
    
    //     nothing happens 

    // [else] if the user's letter DOES match the computers letter 
    //     increase winCount by 1 
    //     winCount++;
    //     reset guessesLeft
        
    //     reset lettersGuessed array
    // 
}