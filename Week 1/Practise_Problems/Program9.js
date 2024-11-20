/*
Problem Statement: Write a program which finds sum of two numbers and print its result in pretty format
Developer: Akshay Mandalik
Last Modified: Sun 1 Sep, 2024 02:26 PM
*/

function fSum(iNum1,iNum2) {

    return iNum1 + iNum2;
    
}
function printResult() {

    let iNum1 = 10, iNum2 = 20;

    let iSum = fSum(iNum1, iNum2);
    console.log("----------------------------");
    console.log("The sum of "+iNum1+" + "+iNum2+" is: " + iSum);
    console.log("----------------------------");
}

printResult();


