'use strict';

//Start Developing the Application

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number =D'
// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.number').textContent =13);
// document.querySelector('.number').textContent =13
// console.log(document.querySelector('.score').textContent = 24)
// document.querySelector('.score').textContent = 24

// document.querySelector('.guess').value =23
// console.log( document.querySelector('.guess').value)

let secretNumber = Math.trunc(Math.random() * 20)+1;
console.log(secretNumber);
//state variable
let score = 20;
let highScore=0;


document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
      //when there is no input
    document.querySelector('.message').textContent = 'No number ';
  } else if (guess === secretNumber) {
      //when player wins the game
    document.querySelector('.message').textContent = 'Correct Number =D';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highScore){
        highScore =score;
        document.querySelector('.highscore').textContent = highScore;
    }

  } else if (guess > 20) {
      //when guess is invalid
    document.querySelector('.message').textContent = 'Invalid Number';
  } else if (guess > secretNumber) {
      //when guess is to high
    if (score > 1) {
      document.querySelector('.message').textContent = 'To High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
      //when guess is to low
    if (score > 1) {
      document.querySelector('.message').textContent = 'To LOw';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the Game';
    }
  }
}
)
document.querySelector('.again').addEventListener('click',()=>{
    score=20;
    document.querySelector('.score').textContent =score;
    secretNumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.message').textContent = 'Start Guessing';
    document.querySelector('.number').textContent= '?'; 
    document.querySelector('.guess ').value=' '
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
})
;
