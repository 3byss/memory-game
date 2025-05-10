// Import random
import { makeARandomNum } from './random.js';

export function makeValues(array) {
    let numbers = {
        1: 0,
        2: 0,
        3: 0,
        4: 0
    }

    // Set cards values
    array.forEach(element => {
        // Get a random number
        let randomNumber = makeARandomNum(4);
        // let currentNumber = numbers.randomNumber;

        element.classList.add(randomNumber);
    });
}