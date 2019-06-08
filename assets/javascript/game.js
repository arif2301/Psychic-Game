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
youGuessText.textContent = 9; 

// user strikes a letter
document.onkeyup = function(event) 
{
    // user guess recorded
    var userGuess = event.key;
 
    //program picks a random letter
    var compChoice = choices [Math.floor (Math.random () * 26)];
    //console.log (choices[0], choices [5]);
    //console.log (Math.floor (Math.random () * 26));
    //console.log ("computer", compChoice);
    console.log ("user", userGuess);
    console.log (choices);
    
    if (userGuess === compChoice) 
    {
        wins+=1 ;
        guessLeft = 9;
        youGuessText.textContent = "Press any letter to restart"; 
    }

    

}