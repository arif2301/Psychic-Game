//doctype : JavaScript
console.log ("testing for game");

var choices = [
    "a","b","c","d","e","f",
    "g","h","i","j","k","l",
    "m","n","o","p","q","r",
    "s","t","u","v","w","x",
    "y","z"
];

// creating variables to display in HTML
var winsText = document.getElementById ("wins");
var lossesText = document.getElementById ("losses");
var guessLeftText = document.getElementById ("guess-left");
var youGuessText = document.getElementById ("you-guessed");

// user strikes a letter
document.onkeyup = function(event) {
    // user guess recorded
    var userGuess = event.key;

    //program picks a random letter
    var compChoice = choices [Math.floor (Math.random () * 26)];
    //console.log (choices[0], choices [5]);
    //console.log (Math.floor (Math.random () * 26));
    console.log ("computer", compChoice);
    console.log ("user", userGuess);
    

    

}