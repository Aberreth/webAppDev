// Counts down from the number paramater.
function countDown(a){
    for(let i=a; i>=0; i--){
    console.log(i)
}}
countDown(12)

// Divides by the input numbers
function division(x,y){
    return x/y
}

// Divides by the input numbers using the previous division function, while removing the decimal place.
// then finds the remainder of the division, and puts it all in a message.
function longDivision(x,y){
    console.log("The quotient is "+ Math.trunc(division(x,y)) + " with a remainder of " + (x%y));
}
longDivision(10,3)

// Prompts the user for 2 numbers, then multiplies them.
function areaCalc(){
    let b = Number(prompt("Enter a number to multiply with."))
    let c = Number(prompt("Enter another number to multiply with."))
    return(b*c)
}
console.log(areaCalc())