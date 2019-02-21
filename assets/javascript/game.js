var phillyWords = [
    "liberty bell",
    "rocky",
    "eagles",
    "rittenhouse",
    "cheesesteak",
    "reading terminal market",
    "sixers",
    "flyers",
    "eastern state penitentiary",
    "franklin institute",
    "old city",
    "manayunk",
    "south street",
    "city hall",
    "rodin museum",
    "betsy ross house",
    "love park",
    "franklin square",
    "spruce street harbor",
    "rittenhouse square",
    "phillies",
    "benjamin franklin parkway",
    "ben franklin bridge",
    "fairmount park",
    "museum of art",
    "wissahickon park",
    "dilworth park",
    "boathouse row",
    "magic gardens",
    "lincoln financial field",
    "wells fargo center",
    "center city",
    "the fillmore",
    "union transfer",
    "the kimmel center",
    "franklin square",
    "passyunk square",
    "queen village",
    "walnut street theatre",
    "italian market",
    "magic gardens",
    "upenn",
    "penn relays",
    "the navy yard",
    "kelly drive",
    "mummers parade",
    "wawa",
    "juneteenth"
];

var wins = 0;
var losses = 0;
var wrongGuesses=5;
var correctLetters=0;
var unguessedWord = [];
var guessedLetters = [];
var wrongGuessesHTML = document.getElementById("wrongGuesses");
var correctLettersHTML = document.getElementById("correctLetters");
var guessedLettersHTML = document.getElementById("lettersGuessed");

function startGame() {
    console.log("starting game");
    wrongGuesses=5;
    correctLetters=0;
    unguessedWord = [];
    guessedLetters = [];
    wrongGuessesHTML.innerHTML=wrongGuesses;
    correctLettersHTML.innerHTML=correctLetters;
    guessedLettersHTML.innerHTML=guessedLetters;




    //Generates random word from phillyWords array
        var wordToGuess = phillyWords[Math.floor(Math.random()*phillyWords.length)];
        console.log(wordToGuess);


    //creates new array unguessedWord and pushes _ for each letter of wordToGuess and " " for each space
        for (i=0; i<wordToGuess.length; i++) {
            if (wordToGuess.charAt(i) === " ") {
                unguessedWord.push("_");
            }
            else {
                unguessedWord.push("-");
            }
            console.log(unguessedWord);
        }

    //Puts unguessedWord in innerHTML & replaces commas with spaces
    document.getElementById("guessWord").innerHTML=unguessedWord.join(" ");

        //prompt user to guess a letter
        document.getElementById("currentMessage").innerHTML="Guess a letter.";
        document.onkeypress = function(event) {
            var guess = event.key.toLowerCase();
            if (guessedLetters.includes(guess)) {
                document.getElementById("currentMessage").innerHTML="You already guessed this letter. Guess again";
            }
            else {
                guessedLetters.push(guess);
                guessedLettersHTML.innerHTML= guessedLetters;

                var isRightGuess = false;
                for (i=0; i<wordToGuess.length; i++) {
                    if (guess === wordToGuess.charAt(i)) {
                        unguessedWord.splice(i,1,guess);
                        correctLetters++;
                        isRightGuess=true;
                        document.getElementById("guessWord").innerHTML=unguessedWord.join(" ");
                        document.getElementById("currentMessage").innerHTML="Good guess!";
                        document.getElementById("correctLetters").innerHTML=correctLetters;
                    } else {
                        document.getElementById("currentMessage").innerHTML="Nice try. Guess again";
                    }

                    //check if win
                    if (!unguessedWord.includes("-")) {
                        alert("You win!");
                        wins++;
                        document.getElementById("wins").innerHTML=wins;
                        break;
                    }
                }
                //if guess was wrong, decrease guesses left
                if (!isRightGuess) {
                    wrongGuesses--;
                    wrongGuessesHTML.innerHTML=wrongGuesses;
                }
                //check if lost
                if (wrongGuesses === 0) {
                    alert("You lose!");
                    losses++;
                    document.getElementById("losses").innerHTML=losses;
                }

            }
        }


}