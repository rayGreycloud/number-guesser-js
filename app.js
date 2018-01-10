/* 
GAME FUNCTION:
- Player guesses number btwn min and max 
- Player gets certain number of guesses  
- Display number of guesses remaining 
- Notify player of win if guess correct 
- Notify player of loss if no guesses remaining
- Display correct answer if player loses
- Play again button 
*/

// Game values 
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max), 
  guessesLeft = 3;
  
// UI elements 
const game = document.querySelector('.game'),
  minNum = document.querySelector('.min-num'), 
  maxNum = document.querySelector('.max-num'), 
  guesses = document.querySelector('.guesses'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message= document.querySelector('.message');

// Assign UI min/max 
minNum.textContent = min;
maxNum.textContent = max;
guesses.textContent = guessesLeft;

// Listener for play again 
game.addEventListener('mousedown', function(e) {

  if (e.target.className == 'play-again') {
    window.location.reload(true);
  }
});

// Listener for guess 
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value); 
  // Validate 
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    
    return;
  }
  
  // Check for win 
  if (guess === winningNum) {
    // Game over - win 
    gameOver(true, `${winningNum} is the correct number - YOU WIN!`);
  } else {
    // Subtract 1 from guessesLeft 
    guessesLeft -= 1;
    // Update guesses left display 
    guesses.textContent = guessesLeft;
    
    // Check if remaining guesses
    if (guessesLeft === 0) {
      // Game over - loss 
      gameOver(false, `${guess} is incorrect and you have no more guesses. Sorry, game over - you lose`);

    } else {
      // Game continues
      // Notify player guess is incorrect, guess again 
      setMessage(`${guess} is incorrect - Guess again`, 'red');
      // Change border color 
      guessInput.style.borderColor = 'red';
      // Clear input 
      guessInput.value = '';
    }
  }
});

// Game over 
function gameOver(won, msg) {
  let color;
  // Set color variable 
  won === true ? color = 'green' : color = 'red';
  // Disable input 
  guessInput.disabled = true;
  // Change border color 
  guessInput.style.borderColor = color;
  // Notify player of win 
  setMessage(msg, color);
  
  // Play Again 
  guessBtn.value = "Play Again";
  guessBtn.className += 'play-again';
}

// Generate random number btwn min and max
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message function 
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

  