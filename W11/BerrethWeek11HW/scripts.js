console.log("interlinked")

// 1. Find the button by its ID
const themeButton = document.getElementById("themeToggle");
// 2. Listen for a click event on that button
themeButton.addEventListener("click", () => {
// 3. Add/remove the "dark" class on the body
document.body.classList.toggle("dark");
console.log("Theme changed!");
});

const addBtn = document.getElementById("addItem");
const list = document.getElementById("items");
let counter = 1; // keeps track of item numbers
addBtn.addEventListener("click", () => {
// Create a new list item
const newItem = document.createElement("li");
// Give it text (Item 1, Item 2, ...)
// The hardest challenge of them all, coming up with "something creative". I'm scared
newItem.textContent = "Hi! I'm your child, #" + counter + "! I love you dad, I really hope you don't delete me for some reason!";
// Add it to the list on the page
list.appendChild(newItem);
counter++; // increase number for next item
});
list.addEventListener("click", (event) => {
// Check if you clicked directly on a list item
if (event.target.tagName === "LI") {
console.log(event.target.tagName + " element was deleted.")
event.target.remove(); // delete that <li>
}
});

// Displays the pressed key as text on the page
const keyOutput = document.getElementById("keyOutput");
document.addEventListener("keyup", (event) => {
keyOutput.textContent = "You pressed: " + event.key;
});