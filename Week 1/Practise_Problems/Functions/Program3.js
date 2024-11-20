/*
Problem Statement: Create a Terminal Clock (HH:MM:SS)
Developer: Akshay Mandalik
Last Modified: Sun 1 Sep 2024 11:00 PM
*/

function getTime() {
    console.clear();
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours + " : " + minutes + " : " + seconds);
    
}

setInterval(getTime,1000);

