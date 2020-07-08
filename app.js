import { compareNumbers } from './numberGameUtils.js';

// import functions and grab DOM elements
let userGuess = document.querySelector('.user-guess');
console.log(userGuess);
const button = document.querySelector('.button');
console.log(button);
let numberOfTries = document.querySelector('.number-of-tries');
console.log(numberOfTries);
let hintMessages = document.querySelector('.high-low-hints');
console.log(hintMessages);
let resultsSpan = document.querySelector('.results');
console.log(resultsSpan);
const gameBox = document.querySelector('.game-box');
console.log(gameBox);
const gameOver = document.querySelector('.game-over-message');
console.log(gameOver);
const youWin = document.querySelector('.you-win-message');
console.log(youWin);

let randomNumber = Math.ceil(Math.random() * 20);
numberOfTries = 3;

// initialize state - 
// button onclick do this check check users guess against random num using function
button.addEventListener('click', () => {
    // get the value of input field 
    let userNum = Number(userGuess.value);
    // console.log(userNum);
    console.log(randomNumber);

    let numsComparisonResults = compareNumbers(userNum, randomNumber);

    //compare that number using the compareNumbers function
    if (numsComparisonResults === 1) {
        numberOfTries--;
        console.log('Too high');
        hintMessages.textContent = ('Yikes! Too high!');
        resultsSpan.textContent = ('BTW You have ' + numberOfTries + ' more tries left.'); 
        // checking game over
        if (numberOfTries <= 0) {
            gameBox.classList.add('hidden');
            gameOver.classList.remove('hidden');
        }

    } else if (numsComparisonResults === -1) {
        console.log('Too low');
        numberOfTries--;
        hintMessages.textContent = ('Yikes! Too low!');
        resultsSpan.textContent = ('BTW You have ' + numberOfTries + ' more tries left.');  
        // checking game over
        if (numberOfTries <= 0) {
            gameBox.classList.add('hidden');
            gameOver.classList.remove('hidden');
        }

    } else if (numsComparisonResults === 0) {
        // Display win message
        gameBox.classList.add('hidden');
        youWin.classList.remove('hidden');
    }
});

// set event listeners to update state and DOM