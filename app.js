// Import all the files I need
import { makeValues } from './javascripts/setValues.js';
import { useTheData } from './javascripts/data.js';

// Set basic variables
let cards = document.querySelectorAll(".card");

// Main function
function app() {
    // Use functions from imports
    makeValues(cards);
    useTheData();

    // Add a click event listener
    cards.forEach(element => {
        console.log(element.classList);
        element.addEventListener("click", () => {
            return true;
        });
    });
}

// Call the main functions
app();

// Use in the data.js
export { cards };