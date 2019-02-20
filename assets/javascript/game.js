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

var guessedLetters = [];
console.log(phillyWords.length);

document.onkeypress = function(event) {

    //Generates random word from phillyWords array
        var unguessedWord = [];
        var wordToGuess = phillyWords[Math.floor(Math.random()*phillyWords.length)];
        console.log(wordToGuess);

    //creates new array unguessedWord and pushes _ for each letter of wordToGuess and " " for each space

    //!!!!!!!*****REMOVE COMMAS ***********

        for (i=0; i<wordToGuess.length; i++) {
            if (wordToGuess.charAt(i) === " ") {
                unguessedWord.push(" ");
            }
            else {
                unguessedWord.push("_");
            }
            console.log(unguessedWord);
        }

    //Puts unguessedWord in innerHTML of div#guessWord but hides visibility
    document.getElementById("guessWord").innerHTML=unguessedWord;
    
    //prompt user to guess a letter
    document.getElementById("currentMessage").innerHTML="Guess a letter.";
    document.onkeypress = function(event) {
        var guess = event.key.toLowerCase();
        if (guessedLetters.includes(guess)) {
            document.getElementById("currentMessage").innerHTML="You already guessed this letter. Guess again";
        }
        else {
            guessedLetters.push(guess);
            document.getElementById("lettersGuessed").innerHTML= guessedLetters;
            console.log(guess);
            console.log(guessedLetters);
            
            for (i=0; i<wordToGuess.length; i++) {
                if (guess === wordToGuess.charAt(i)) {
                    unguessedWord.splice(i,1,guess);
                    console.log(unguessedWord);
                    document.getElementById("guessWord").innerHTML=unguessedWord;
                }
                else {
                    document.getElementById("currentMessage").innerHTML="Nice try. Guess again";
                }
            }
        }
    }


//checks to see if letter already guessed, if not checks to see if in wordToGuess
//if in wordToGuess, assigns the letter to the character index of unguessedWord & reveals to user.
//if not in wordToGuess, tells user "Nice try. Guess again."



    // for (i=0; i<guessedLetters.length; i++) {

    //     if {
    //         for (i=0; i<wordToGuess.length; i++) {
    //             if (guess === wordToGuess.charAt(i)) {
    //                 unguessedWord.replace(indexOf(i), guess);
    //                 console.log(unguessedWord);
    //             }
    //             else {
    //                 document.getElementById("guessAgain").innerHTML="Nice try. Guess again";
    //             }
    //         console.log(guessedLetters.push(guess));
    //         document.getElementById("lettersGuessed").innerHTML=guess + " ";
    //         }
    //     }
    // }

}