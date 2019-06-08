//doctype : JavaScript
//please open console log to follow along and manipulate
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
var guessLeft =10;
var youGuess = " ";
youGuessText.textContent = "Guess what letter I am thinking of! You have 10 guesses. Press any letter to Start"; 
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
    console.log ("computer has picked the letter ", compChoice);
    console.log ("user has guessed ", userGuess);
    //console.log (choices);
    
    if (userGuess === compChoice) 
    {
        wins+=1 ;
        guessLeft = 10;
        youGuess = " ";
        youGuessText.textContent = "You Won! Press any letter to restart"; 
        compChoice = choices [Math.floor (Math.random () * 26)]
        ;
        console.log ("New Letter", compChoice);
        console.log ("++++++win+++++++");
    }

    // if compchoice is not = userguess
    // note to TA: below if statement didn't work. youGuessText would not reset to "you won " statement as i expected it to when the user = computer. it would just continue with "your guess so far" can you tell me why? i replaced with else command instead
    //if (userGuess !== compChoice)
    else
    {
        guessLeft -=1;
        console.log ("guesses left", guessLeft);
        youGuess += userGuess + ", "; 
        youGuessText.textContent = "Your Guesses so far : " + youGuess;
        if (guessLeft === 0)
        {
            losses+=1 ;
            guessLeft = 10;
            youGuess = " ";
            youGuessText.textContent = "You are out of guesses! Press any letter to restart";
            compChoice = choices [Math.floor (Math.random () * 26)]
            ;
            console.log ("New Number", compChoice);
            console.log ("-------loss--------");
        }
    }

    //results being displayed
    console.log ("wins", wins, "losses", losses)

    guessLeftText.textContent = "Guesses Left : " + guessLeft;
    winsText.textContent = "Your Wins : " + wins;
    lossesText.textContent = "Your Losses : " + losses;
    

}