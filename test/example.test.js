// IMPORT MODULES under test here:
import { compareNumbers } from '../numberGameUtils.js';

const test = QUnit.test;

test('this will test if the number is too high or low or the same', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const usersNum1 = 1;
    const usersNum2 = 2;
    const usersNum3 = 3;
    const actualNumber = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = compareNumbers(usersNum1, actualNumber);
    const actual2 = compareNumbers(usersNum2, actualNumber);
    const actual3 = compareNumbers(usersNum3, actualNumber);
    
    //Expect
    // Make assertions about what is actualNumber versus the actual result
    expect.equal(actual1, -1);
    expect.equal(actual2, 0);
    expect.equal(actual3, 1);
});

