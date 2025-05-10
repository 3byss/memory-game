// Import the cards data
import { cards } from '../app.js'

// This hold all of the logic
export function useTheData() {
    // Get the data from the combinations.json file
    let setData = async () => {
        // Try catch block for debugging
        try {
            // Initalize response
            let response = await fetch('combinations.json');

            // Debug if statement
            if (!response.ok) {
                throw new Error("There is a error fetching the response");
            }

            // Turn the response into JSON then return
            let data = await response.json();
            return data;
        
        // Catch block
        } catch(e) {
            console.error(`Error occured --> ${e}`); // Console.error the error
        }
    }

    let data = setData(); // Get data to use in later functions

    console.log(data);

    cards.forEach(element => {
        if (element.classList[0] == 1) {
            console.log(data[1]);
        }

        if (element.classList[1] == 2) {
            console.log(data[2]);
        }

        if (element.classList[2] == 3) {
            
        }
    });
}