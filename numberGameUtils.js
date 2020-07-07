// this function will generate a random number and set it to actualNumber 
export function actualNumber() {
    let randomNumber = Math.ceil(Math.random() * 20);
    return randomNumber;
}

//this function will compare the users number with the actual number 
export function compareNumbers(usersNum, actualNumber) {
    //if users number is too high, return to results area 1
    if (usersNum > actualNumber) {
        return 1;
    // if users number is too low, return to results area -1
    } else if (usersNum < actualNumber) {
        return -1;
    //if users number is the same as actualNumber, return 0
    } else if (usersNum === actualNumber) {
        return 0;
    } else {
        return;
    }
}