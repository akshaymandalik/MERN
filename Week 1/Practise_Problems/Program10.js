/*
Function taking another function as input
*/

let iNum1 = 10;
let iNum2 = 20;

function findSum(iNum1,iNum2,fnToCall1,fnToCall2) {

    result = iNum1 + iNum2;
    fnToCall1(result);
    fnToCall2(result);
}

function printResult(result) {
    

    console.log("Result of sum is:"+result);
}

function printResultPassive(result) {


    console.log("Sum's result is:"+result);
}

findSum(iNum1, iNum2,printResult,printResultPassive);