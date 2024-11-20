let a = 1;

for (a = 1; a <= 10;a++){
    console.log(a);
}

console.log("Reverse:")
a = 10;

while (a>=1) {
    console.log(a);
    a--;
}

let answer = 0;
let temp = 1;
do{
    answer = answer + temp;
    temp++;
    
} while (temp <= 100);


console.log("The addition of numbers from 1 to 100 is "+answer);