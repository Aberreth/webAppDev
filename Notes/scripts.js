// WHY USE LOOPS?
// Repeat code multiple times withouth duplicating code

// WHILE loops
// while(condition){
// Code runs repeatedly so long as the condition is true.
// infinite loops, make sure something changes inside the condition
// }

let count = 0
while(count<=5){
    console.log("Count is: "+count);
    count++; //Increment, will end the loop after the count reaches 5
}


// FOR loops
// for(initialization; condition; final-expression){
//}
for(let i=1; i<=5; i++){
     console.log("i is: "+i);
}

// let i=1 is our starting point.
// i<=5, means to stop when greater than 5
// i++, increments i by 1
// It can be easier to read the code for the for loop when its all in one line.

// A program that lets the user pick what number to count to.

let num=Number(prompt("Pick a number: "));
for(let i=1; i<=num; i++){
    console.log(i)
}

// Triangle loop pattern
let triangle=""
for(let line=1; line<=7; line++){
    triangle+="A";
    console.log(triangle)
}