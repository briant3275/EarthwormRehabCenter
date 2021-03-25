function getWorms(){
  let getName = prompt("What is your name? ");


  if (getName === null || !isNaN(getName)){

      while (getName !== null || isNaN(getName)){
          alert("Invalid name, please try again");
          getName = prompt("What is your name ? ");
        if (getName !== null || isNaN(getName)){
            document.write("The worms need you", getName);
        }
      }
  }else {
      document.write("The worms need you ", getName);
  }
}
function wormGame(){
  let guessingGameYesOrNo = prompt('Do you want to play the worm game?');

  
  while (guessingGameYesOrNo.toLowerCase() == 'yes'){
      let correctAnswer = 100;
      let userGuess = prompt('Between 1-100, how many worms does one person need?');
      let numberOfGuesses = 7;

      for(let i = 0; i < numberOfGuesses; i++) {
          let guessLeft = numberOfGuesses - i;
          if(userGuess < correctAnswer){
              userGuess = prompt(guessLeft + ' Guesses left. To Low. Please enter a number 1-100')
          } else if (userGuess > correctAnswer) {
              userGuess = prompt(guessLeft + ' Guesses left. To High! Please enter a number 1-100');
          }
          if (userGuess == correctAnswer){
              alert('Damn straight!');
              break;
          }
      }
      guessingGameYesOrNo = prompt('Do you want to play the worm game?');
  }
}

function userWorms(){
  let userAnswer = confirm('Would you like more worms?');
  let url = 'https://cdn.pixabay.com/photo/2019/02/15/12/00/earth-worm-3998335__340.png'

  if (userAnswer) {
      let userAnswerNumber = prompt('How many worms can I get ya?');
      for(let i = 0; i < userAnswerNumber; i++){
          document.write('<img ' + 'src=' + '"' + url + '" id="worm">');
      }
  
  }
}