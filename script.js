'use strict';
//dom manipulation basic example
// console.log(document.querySelector('.message').textContent);
// selecting the element in #23 index.html
//dom - structural repren of html document
//dom- automatically created.. document html body p img title..everything is an element
//dom uses js to access and manipulate dom elements
//document is the entry point to dom
//parent - html, body and title child , siblings to themselves, child...
//dom and dom methods are NOT part of JS, its part of web apis
//web apis are lib written in js

//manipulate as below
// document.querySelector('.message').textContent = 'Congrats!! Correct number!!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 25;
// document.querySelector('.score').textContent = 30;

// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);

const secretNo = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// here the game will throw secret random number

//random gives b/w 0-1, trunc removes decimal values

// event listener - waits for the event and reacts to it
//what happens when we click on check button now

const displayMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //this value is a string
  //any value from user is always a string
  // document.querySelector('.message').textContent = 'Changing the text after clicking the guess button!!';

  //if no number is provided
  if (!guess) {
    displayMsg('Please provide a number!! 🤦‍♀️');
    //for emoji press windows key + .
  } else if (guess === secretNo) {
    //here guess is string, secretNo is no
    displayMsg('Congrats! You guessed it right ✔');
    document.querySelector('.number').textContent = secretNo;

    //now if its correct, need to change bg color and increase no width
    //to change styles on dom ele, always = string
    //. for class, # for id, for others just directly
    //here in js for styles no -, just camelcasing
    //inline styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';

    // if you guessed it right, and if the current score is more than the highscore

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNo) {
    if (score > 1) {
      //DRY principle -- code refactoring !!
      //use ternary op
      displayMsg(
        guess < secretNo ? 'Your guess is low ⬇' : 'Your guess is high ⬆'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('GAME OVER!! YOU LOST THE GAME.... ☠');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// addeventlistener on a specific element here the check button, whats the event ie click is
//click is passed as 1st arg, and the reaction ie event what to do
//when its clicked == here print the value .. 2nd arg
//can have multiple events to happen once click...

//if you click on  again button
document.querySelector('.again').addEventListener('click', function () {
  //restore score back to 20
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMsg('Hello there !! Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
