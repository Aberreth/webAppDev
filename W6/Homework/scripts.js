// Comparison operatiors
// === equal to
// !== not equal to

console.log(1===1);
console.log(1!==1);

// let score =85;
if (score>99){
    console.log("A")
}
else if(score>79){
    console.log("B")
}
else if(score>69){
    console.log("C")
}
else{
    console.log("mediocre grade")
}

// We use prompt() to make websites more interactive
// let score = 85; is a hardcoded variable

let score = Number(prompt("Enter your score (0-100)"))
// input is a string data type. number() converts it to an integer

document.body.innerHTML += "<p>The score you got is a" + score + "</p>";

// Ask the user for their name, then display "Hello [name]"
let username=prompt("What is your name?")

