// what is a function?

//greet("Alek"); // "Alek" is the argument.

// Function that will add two numbers together
// then console the total.

function addNumbers(a,b){
    return(a+b)
}

let total=addNumbers(4,6)
console.log("The total is: " + total)

// Return sends a value back to where the function was called
// console.log() just prints it

// Return is like your function handling you back a notes with the answer written on it.
// console.log is your function yelling the answer out loud, we can hear it but we can't use it again.

function multiply(x,y){
    return(x*y)
}

let product=multiply(15,15)
console.log("The product is: " + product)

// Create me a function that will count to 5 by 1s
function counter(c){
    for(let i=1; i<=c; i++){
    console.log(i)
}}
counter(5)

// Nested functions
// Function that can call another function inside of it
function square(num){
    return num*num
}
function printSquare(num){
    console.log("Square is: "+ square(num));
}
printSquare(6)

// Greets the user, asks for their name, then prints it.
function username(){
    let name = prompt("What's your name?")
    console.log("Hello, "+name)
}
username()