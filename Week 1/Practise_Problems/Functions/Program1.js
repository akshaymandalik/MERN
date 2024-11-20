/*
Problem Statement: Create a counter in JAVASCRIPT (count down 30 to 0)
Developer: Akshay Mandalik
Last Modified: Sun 1 Sep, 2024 10:06 PM
*/

let counter = 30;

function printNum() {
    
    console.log(counter);
    counter--;
    if (counter == -1) {
      clearInterval(interval);
    }
    
    
}

const interval = setInterval(printNum, 1000);

