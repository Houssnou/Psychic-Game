 //declaration of variables 
 var wins = 0; // to store the user wins
 var losses = 0; //to store the losses
 var attempts = 10 // to store the number of attempts left
 var userGuesses = []; // to store all the key pressed by the user
 var computerGuess;
 // the alphabet array named letters
 var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
 ];

 function resetGame() {
   // Randomly chooses a choice from the letters array. This is the Computer's guess.
   computerGuess = letters[Math.floor(Math.random() * letters.length)];
   userGuesses = [];
   attempts = 10;
 }

 //run resetGame on load
 resetGame();

 document.onkeyup = function (event) {

     var userGuess = event.key.toLowerCase(); // userGuess to store the key pressed by the user

     //console.log(userGuess);
     //console.log("--" + computerGuess);

     //lets check if the user guess matches the computer guess
     if (attempts > 0) {
       // lets store the user guessed word in the userGuessed Array
       userGuesses.push(userGuess);

       if (userGuess === computerGuess) { // if true
         wins++;
         // resetGame()
         resetGame();
       } else {
         attempts--; //else increment losses and take one attempts off as well
         if (attempts === 0) {
           // you lose
           losses++;
           resetGame();
         }
         //console.log(`w: ${wins} L: ${losses} a: ${attempts}`);
         //console.log(userGuesses.join(' ') + '.');
       }
       document.getElementById("wins").textContent = wins;
       document.getElementById("losses").textContent = losses;
       document.getElementById("guessesLeft").textContent = attempts;
       document.getElementById("guesses").textContent = userGuesses.join(' ');
     }
   }