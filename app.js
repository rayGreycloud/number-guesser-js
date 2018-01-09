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
  winningNum = 2, // temp hard coded 
  guesses = 3;
  
// UI elements 
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'), 
  maxNum = document.querySelector('.max-num'), 
  guessesLeft = document.querySelector('.guesses'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message= document.querySelector('.message');

// Assign UI min/max 
minNum.textContent = min;
maxNum.textContent = max;
guessesLeft.textContent = guesses;

// Listener for guess 
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value); 
  console.log(guess);
  // Validate 
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  
  // Check for win 
  if (guess === winningNum) {
    // Disable input 
    guessInput.disabled = true;
    // Change border color 
    guessInput.style.borderColor = 'green';
    // Notify player of win 
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  } else {
    
  }
});

// Set message function 
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

  