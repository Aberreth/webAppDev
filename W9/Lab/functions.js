// Prompts the user for 2 numbers, then adds them.
function addNumbers(){
    let x = Number(prompt("Enter a Number."))
    let y = Number(prompt("Enter another Number"))
    return(x+y)
}
// Since the function only returns the sum, the function is within console.log() so that the result is printed.
// No variables need to be passed for the sum since they're defined by user prompts in the function.
console.log(addNumbers())

// Prompts the user for 2 numbers, then multiplies them.
function areaCalc(){
    let l = Number(prompt("What is the length of your shape?"))
    let h = Number(prompt("What is the height of your shape?"))
    return(l*h)
}
console.log(areaCalc())

// Prompts the user for their name, then prints it in a message.
function greetUser(){
    let name = prompt("What's your name?")
    console.log("Hello, "+name)
}
// Since the function prints the message to the console, it doesn't need to be in a console.log statement.
greetUser()