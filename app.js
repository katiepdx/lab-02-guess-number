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

let randomNumber = Math.ceil(Math.random() * 20);
numberOfTries = 4;

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
    } else if (numsComparisonResults === -1) {
        console.log('Too low');
        numberOfTries--;
        hintMessages.textContent = ('Yikes! Too high!');
        resultsSpan.textContent = ('BTW You have ' + numberOfTries + ' more tries left.');  
    } else if (numsComparisonResults === 0) {
        hintMessages.textContent = ('WHOOOOOOTTT');
        resultsSpan.textContent = ('You guessed it!');
        console.log('You guessed it!');
    }
    // if userNum is too high, in resultsSpan write "guess is too high"
        // update numberOfTries by decreasing number by 1

    // if number of tries is less than one, in resultsSpan write "you lose! "

});

// set event listeners to update state and DOM