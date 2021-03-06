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

// declare variables
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var unguessedWord = [];
var guessedLetters = [];
var guessesLeftHTML = document.getElementById("guessesLeft");
var guessedLettersHTML = document.getElementById("guessedLetters");
var rockySong = new Audio("assets/music/RockyThemeSong.mp3");

function playRocky() {
    rockySong.play();
}

//alert game only works on desktops if user is on a mobile device
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
swal("This game is currently not available on mobile devices.");
}

//begin playing by pressing any key
document.onkeypress = function startGame() {
    guessesLeft = 5;
    unguessedWord = [];
    guessedLetters = [];
    guessesLeftHTML.innerHTML = guessesLeft;
    guessedLettersHTML.innerHTML = guessedLetters;

    //Generates random word from phillyWords array
    var wordToGuess = phillyWords[Math.floor(Math.random() * phillyWords.length)];

    //creates new array unguessedWord and pushes _ for each letter of wordToGuess and " " for each space
    for (var i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess.charAt(i) !== " ") {
            unguessedWord.push("_");
        }
        else {
            unguessedWord.push("<br>");
        }
    }

    //Puts unguessedWord in innerHTML & replaces commas with spaces
    document.getElementById("guessWord").innerHTML = unguessedWord.join(" ");

    //prompt user to guess a letter
    document.getElementById("currentMessage").innerHTML = "Guess a letter.";
    document.onkeypress = function checkLetter() {
        rockySong.pause();
        var guess = event.key.toLowerCase();
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 3, "$"];
        //checks if key pressed is a letter
        if (letters.includes(guess) === false) {
            document.getElementById("currentMessage").innerHTML = "Not a letter - guess again.";
        } else {
            //checks if key pressed was already guessed
            if (guessedLetters.includes(guess.toUpperCase())) {
                document.getElementById("currentMessage").innerHTML = "You already guessed this letter. Guess again";
            } else {
                //changes letter pressed into Uppercase & pushes into guessedLetters array
                guessedLetters.push(guess.toUpperCase());
                guessedLettersHTML.innerHTML = guessedLetters.join(" ");
                var isRightGuess = false;
                //checks if letter pressed is in guessWord & pushes into unguessedWord array if so
                //if not, tells user to guess again
                for (var i = 0; i < wordToGuess.length; i++) {
                    if (guess === wordToGuess.charAt(i)) {
                        unguessedWord.splice(i, 1, guess);
                        isRightGuess = true;
                        document.getElementById("guessWord").innerHTML = unguessedWord.join(" ");
                        document.getElementById("currentMessage").innerHTML = "Good guess!";
                    } else {
                        document.getElementById("currentMessage").innerHTML = "Nice try. Guess again.";
                    }
                    //checks if user won & if so increases wins by one
                    if (!unguessedWord.includes("_")) {
                        playRocky();
                        swal("You win!");
                        wins++;
                        document.getElementById("wins").innerHTML = wins;
                        startGame();
                    }
                }
                //if letter pressed not in guessWord, decreases guesses left by one
                if (!isRightGuess) {
                    guessesLeft--;
                    guessesLeftHTML.innerHTML = guessesLeft;
                }
                //checks if user lost & if so increases losses by 1 & automatically restarts game after 1 second
                if (guessesLeft === 0) {
                    swal("You lose!");
                    document.getElementById("currentMessage").innerHTML = "The word is:";
                    document.getElementById("guessWord").innerHTML = wordToGuess.toUpperCase();
                    losses++;
                    document.getElementById("losses").innerHTML = losses;
                    setTimeout(startGame, 1000);
                }
            }
        }
    }
}