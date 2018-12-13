document.onkeyup = function (event) {
  //
  var userChoice = event.key.toLocaleUpperCase();
  //display of the value of userChoice
  console.log(userChoice);
  
  var letters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  // Randomly chooses a choice from the letters array. This is the Computer's guess.
  var computerGuess = letters[Math.floor(Math.random() * letters.length)];
  //display of computer guess
  console.log(" -- "+ computerGuess);

}