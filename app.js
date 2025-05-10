import { randomNum } from './random.js';

// Set basic variables
let cards = document.querySelectorAll(".card");
let usedNumbers = {};

// Set cards values
cards.forEach(element => {
    let randomNumber = randomNum(3);
    
    // Check to see if we can add that number in
    if (usedNumbers.length == 0) {
        element.value = randomNumber;
    } else if (usedNumbers.randomNumber == 2) {
        element.value = randomNumber - 1;
    }
});

console.log(cards);