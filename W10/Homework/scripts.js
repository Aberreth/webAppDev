// Check to see if properly linked: make sure file is linked
console.log("interlinked"); 

// 1) Grab my title and main section
const titleEl = document.getElementById("myTitleId");
const mainEl = document.getElementById("myMainId");
// 2) Update the title text
titleEl.textContent = "My Theme — Powered by JavaScript";
// WHY: textContent replaces the visible text inside the element safely.

// Grab my image
const imgEl = document.getElementById("myImgId");
// Swap to a new image and alt text (use any public image URL)
imgEl.src = "https://via.placeholder.com/600x260";
imgEl.alt = "[Describe your new image]";
// WHY: Changing attributes lets you swap content without editing HTML.

// Example data structure — use your own keys/values
const items = [
{ name: "[Item 1]", info: "[Short detail 1]" },
{ name: "[Item 2]", info: "[Short detail 2]" },
{ name: "[Item 3]", info: "[Short detail 3]" }
];
// Target the list you created in HTML
const listEl = document.getElementById("[yourListId]");
listEl.innerHTML = ""; // clear existing
// Create and append list items from your data
items.forEach((obj) => {
const li = document.createElement("li");
li.textContent = `${obj.name} — ${obj.info}`;
listEl.appendChild(li);
});
// WHY: createElement + appendChild builds real nodes (safer than string HTML).

const toggleBtn = document.getElementById("[yourToggleBtnId]");
// Toggle on the <main> or on document.body — your choice
toggleBtn.addEventListener("click", () => {
mainEl.classList.toggle("[yourHighlightClass]");
});
// WHY: classList.toggle adds the class if missing, removes if present.
// This keeps style logic in CSS, behavior in JS (good separation). 

const swapBtn = document.getElementById("[yourSwapBtnId]");
let swapped = false;
swapBtn.addEventListener("click", () => {
if (!swapped) {
imgEl.src = "https://via.placeholder.com/640x280";
imgEl.alt = "[Alt for image B]";
swapped = true; } else {
imgEl.src = "https://via.placeholder.com/600x260";
imgEl.alt = "[Alt for image A]";
swapped = false;
}
});
// WHY: This shows conditional logic + DOM attribute updates on a user action. 