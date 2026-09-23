// Prompts the user for their score, and then outputs the corresponding grade to the console.
let score = Number(prompt("Enter your score (0-100)"))
if (score >= 90){
    console.log("A")
}
else if(score >= 80){
    console.log("B")
}
else if(score >= 70){
    console.log("C")
}
else{
    console.log("F")
}

// Prompts the user, asking for their age, then outputs whether they are an adult or a minor.
let age = Number(prompt("How old are you?"))
if (age >=18){
    console.log("You are an adult")
}
else{
    console.log("You are a minor")
}

let memberStatus = prompt("Do you have a membership with us? [y/n]")
if (memberStatus === "y") {
    console.log("Membership benefits applied")
}
else {
    console.log("No membership benefits applied")
}


