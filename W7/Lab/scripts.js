// The for loop sets a variable, checks a condition with that variable, and then how that variable is to be changed with each loop.
for(let i=1; i<=5; i++){
     console.log("i is: "+i);
}

// "let i=1" sets the i variable to 1, its where the count will start.
// "i<=5" tells the loop to stop when greater than 5.
// i++ increments i by 1 for each loop.

// For loops are better than while loops in some situations, because can be easier to read the code for the for loop when its all in one line.

// A program that lets the user pick what number to count to.
let num=Number(prompt("Pick a number: "));
for(let i=1; i<=num; i++){
    console.log(i)
}
// Nearly identical to the first program, just checks if i is greater than a user-inputted variable rather than a set number.

// Triangle loop pattern
// I need to set the triangle variable before the loop, because it is not included in the parentheses of the for loop.
let triangle=""
for(let line=1; line<=7; line++){
    triangle+="R";
    console.log(triangle)
}
// x += 5 is equivalent to x = x + 5
// By using the += operator here, more Rs are added to the string of the triangle variable.
// When it is printed, each print of the triangle variable has more Rs than the last, creating the triangle effect.