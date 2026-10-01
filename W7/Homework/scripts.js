// A program that lets the user pick a number that will be counted down from.
let userNum=Number(prompt("Enter your number > "));
for(let i=userNum; i>=0; i--){
    console.log(i)
}

console.log("\n")

// Lists the first 10 multiples of the user-inputted number. If the number is a multiple of 3 as well, "Fizz" is printed. If it's a multiple of 5, "Buzz" is printed.
let count=Number(prompt("Input a number > "))
let i = 1
while(i<=10){
    console.log(count*i)
    if ((count*i)%3===0){
        console.log("^ Fizz") // Checks if the resulting multiple is equally divisible by 3, and thus a multiple of 3.
    }
    if ((count*i)%5===0){
        console.log("^ Buzz") // Same as last check but for 5
    }
    i++
}
