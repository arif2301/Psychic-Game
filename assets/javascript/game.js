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

// setting all the counters to 0
var wins = 0;
var losses = 0;
var guessLeft = 9;
var youGuess = " ";
youGuessText.textContent = "Press any letter to restart"; 
var compChoice = choices [Math.floor (Math.random () * 26)];
//var userGuess = " ";

// user strikes a letter
document.onkeyup = function(event) 
{
    // user guess recorded
    var userGuess = event.key;
 
    //program picks a random letter
    
    //console.log (choices[0], choices [5]);
    //console.log (Math.floor (Math.random () * 26));
    console.log ("computer", compChoice);
    console.log ("user", userGuess);
    //console.log (choices);
    
    if (userGuess === compChoice) 
    {
        wins+=1 ;
        guessLeft = 9;
        youGuess = " ";
        youGuessText.textContent = "you Won! Press any letter to restart"; 
        compChoice = choices [Math.floor (Math.random () * 26)]
        ;
        console.log ("New Number", compChoice);
    }

    // if compchoice is not = userguess
    if (userGuess !== compChoice)
    {
        guessLeft -=1;
        console.log ("guess left", guessLeft);
        youGuess += userGuess; 
        youGuessText.textContent = "Your Guesses so far " + youGuess;
    }

    

}