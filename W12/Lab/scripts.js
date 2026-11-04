// Select the form and result section
const form = document.getElementById("comments");
const result = document.getElementById("results");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const color = document.getElementById("color").value;
    const message = document.getElementById("message").value;

    // Display the info back to the user
    result.innerHTML = `
      <h3>Results:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Fav color:</strong> ${color}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
});
// 1. event.preventDefault() causes the default action of the event to not occur, and in the case of the submit button, this cancels the page reloading.
// 2. .value returns the value of the element that was selected, and in this case that is the data that the user inputted.
// 3. Because its simpler and faster to implement than concatenation. 
