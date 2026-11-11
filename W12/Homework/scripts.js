const form = document.getElementById("order");
const result = document.getElementById("confirm");
let price = 0.00

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Gets elements and their values by their unique ID.
    const customername = document.getElementById("customername").value
    const side = document.getElementById("side").value
    const requests = document.getElementById("requests").value
    // Code for checking checkbox value from:
    // https://www.geeksforgeeks.org/html/how-to-get-all-checked-values-of-checkbox-in-javascript/
    // The "name" attribute associated with the checkboxes is used by the event listener to select each radio button.
    let checkboxes = document.getElementsByName('toppings');
    let toppings = "";
    let isToppings = false
    // The for loop sets i to zero, and then the if statement checks if the checkbox at that value is checked.
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            // If toppings are selected, then "with " is appended before anything else. So if no toppings are selected, the grammar is still correct.
            if (isToppings === false)
                toppings += "with "
                isToppings = true
            // If it is, it executes the if statement and appends the value of the given checkbox to the "toppings" variable, with a ", " to seperate selections.
            toppings += checkboxes[i].value
                + ", ";
        }
    }
    // The radio buttons work in a similar way to the checkboxes, except in one variable since only 1 size can be selected
    let size = document.getElementsByName('size');
    for (var i = 0; i < size.length; i++) {
        if (size[i].checked)
            size = size[i].value
    }
    // Displays the selections
    result.innerHTML = `
    <h3>Your order is on the way!</h3>
    <p>Order for ${customername}</p>
    <p> A ${size} Pizza ${toppings} and a side of ${side}
    <p> Customer requests:\n
    ${requests}
    `
});

