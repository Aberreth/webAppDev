console.log("interlinked")

// Changes output text when the button is clicked
const clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", () => {
document.getElementById("output").textContent = "Button clicked";
});

// Changes output text when the button is double-clicked
const doubleButton = document.getElementById("doubleButton");
doubleButton.addEventListener("dblclick", () => {
document.getElementById("output").textContent = "Button DOUBLE clicked";
});

// Changes output text when the <p> containing the text is hoevered over. I couuullldddd make this more exact but it isn't required and I'm lazy
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
document.getElementById("output").textContent = "Text hovered over"
});
// Changes the text color and content when the mouse stops hoevering over the <p> containing the text
hoverText.addEventListener("mouseout", () => {
hoverText.style.color = "green";
document.getElementById("hoverText").textContent = "It's green for an amazing reason";
});

// Displays the last pressed key in the output text
document.addEventListener("keyup", () => {  
document.getElementById("output").textContent = event.key + " pressed";
});

// Displays the text inputted into the box in the output box. Again I could make this work better with the keyup one but re: lazy
const textInput = document.getElementById("textInput");
textInput.addEventListener("input", () => {
document.getElementById("output").textContent = textInput.value
});
