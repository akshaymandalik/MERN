/*
Problem Statement: Calculate the time it takes between a setTimeout call and the inner function actually running
Developer:Akshay Madnalik
Last Modified: Sun 1 Sep,2024 10:50 PM
*/

setTimeout(printConsole, 5000);
let beforeFunctionCall = Date.now();
let afterFunctionCall = 0;
function printConsole() {

    afterFunctionCall = Date.now();
    console.log("Hii there!!");
    let actualTime = afterFunctionCall - beforeFunctionCall;
    console.log("Actual time taken to call function: " + (actualTime/1000));
}
