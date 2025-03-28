/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {

    let time = new Date();
    let beforeExecution = time.getTime() / 1000;
    let sum = 0;
    for (let iCnt = 0; iCnt < n;iCnt++){
        sum = sum + iCnt;
    }
    let afterExecution = time.getTime() / 1000;
    console.log(sum);

    console.log("Time taken to execute the code is "+(afterExecution-beforeExecution)+" seconds\n");
    
}

calculateTime(100000000);