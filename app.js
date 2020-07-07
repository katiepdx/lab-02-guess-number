// import { compareNumbers } from ('./numberGameUtils');

// import functions and grab DOM elements
let userGuess = document.querySelector('.user-guess');
console.log(userGuess);
const button = document.querySelector('.button');
console.log(button);
let numberOfTries = document.querySelector('.number-of-tries');
console.log(numberOfTries);
let resultsSpan = document.querySelector('.results');
console.log(resultsSpan);

let randomNumber = Math.ceil(Math.random() * 20);
numberOfTries = 4;

// initialize state - 
// button onclick do this check check users guess against random num using function
button.addEventListener('click', () => {
    // get the value of input field 
    let userNum = Number(userGuess.value);
    console.log(userNum);
    console.log(randomNumber); 

    //compare that number using the compareNumbers function
    // if userNum is too high, in resultsSpan write "guess is too high"
        // update numberOfTries by decreasing number by 1

    // if number of tries is less than one, in resultsSpan write "you lose! "

});

// set event listeners to update state and DOM