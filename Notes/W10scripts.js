console.log("linked")
// DOM and Basic Manipulation
// What is the DOM?
// Documanet Object Model, this is how the browser represents your webpage in memeory
// HTML elements become a JS object that we can access, change or delete
// JS to change text, images, colors, classes, etc. This occurs after the webpage fully loads.

// Change text content with JS
// We are going to find the HTML Element via its ID attribute\
const title=document.getElementById("title")
// document, reoresents the whole webpage loaded in the browser
// .getelementbyID("title"), finds the element in the html with the exact ID
// Const, menas that the variable reference wont change 
// it will always dpoint to the same DOM element.

title.textContent="Welcome to my Webpage!"
// .textContent accesses or changes the text inside the element

// Selecting Eelements
// getElementbyID, selects one element by its ID 

// querySelector, Selects the first match(ID, Class,tag) document.quertSelectory(".main")
// querySelectoryAll(), returns a nodelist of all matches   document,quertSelectorAll("p")

const mainSection=document.querySelector(".main");
mainSection.style.backgroundColor="black"

const paragraphs=document.querySelectorAll("p");
// Loop through all p elements and change their text
paragraphs.forEach((para,index) => {
para.textContent= `Parapragh ${index +1} modified by quertSelectorAll()`;
para.style.color = "lavender";
});

// Adding interactivity
// Select button
const button=document.getElementById("toggle");
// listen for a button click
button.addEventListener("click",() => {
    // toggle the highlight class on the body
    document.body.classList.toggle("highlight")
    



});

