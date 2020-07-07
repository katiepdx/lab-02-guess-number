// import functions and grab DOM elements
const userGuess = document.querySelector('.user-guess');
console.log(userGuess);
const button = document.querySelector('.button');
console.log(button);
let numberOfTries = document.querySelector('.number-of-tries');
console.log(numberOfTries);
const resultsSpan = document.querySelector('.results');
console.log(resultsSpan);

numberOfTries = 0;

// initialize state - 
// button onclick do this check check users guess against random num using function
button.addEventListener('click', () => {
    console.log('hello')
});

// set event listeners to update state and DOM