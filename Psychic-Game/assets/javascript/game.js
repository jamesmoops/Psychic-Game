
// Letters the user can type

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// setting for at 0

var wins = 0;
var losses = 0;
var guessesLeft = 9;
varletterUser = [] ;
var eachofLetters = null;

// next step sets computerGuess variable equal to random choice from computerChoice variable

var computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];

function countGuessesLeft() {
    document.querySelector("guessesLeft").innerHTML = "Guesses Left:" + guessesLeft;
}

countGuessesLeft();

var restart = function() {
    guessesLeft = 9;
    letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

// when user pushes key, the following is run

document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    letterUser.push(userGuess);
    countGuessesLeft();
    farUserGuesses();

    if (userGuess === computerGuess){
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        restart();
    }
    else if (guessesLeft === 0){
        losses++;
        document.querySelector("#lose").innerHTML = "Loses: " + losses;
        restart();
    }
};