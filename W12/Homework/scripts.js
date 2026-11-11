const form = document.getElementById("order");
const result = document.getElementById("confirm");
let price = 0.00

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    const customername = document.getElementById("customername").value
    const side = document.getElementById("side").value
    const requests = document.getElementById("requests").value
    let checkboxes = document.getElementsByName('toppings');
    let toppings = "";
    let isToppings = false
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            if (isToppings === false)
                toppings += "with "
                isToppings = true
            toppings += checkboxes[i].value
                + ", ";
        }
    }
    let size = document.getElementsByName('size');
    for (var i = 0; i < size.length; i++) {
        if (size[i].checked)
            size = size[i].value
    }
    result.innerHTML = `
    <h3>Your order is on the way!</h3>
    <p>Order for ${customername}</p>
    <p> A ${size} Pizza ${toppings} and a side of ${side}
    <p> Customer requests:\n
    ${requests}
    `
});

// Code for checking checkbox value from:
// https://www.geeksforgeeks.org/html/how-to-get-all-checked-values-of-checkbox-in-javascript/
// The "name" attribute associated with the checkboxes is used by the event listener to select each radio button.
// The for loop sets i to zero, checks if the checkbox at that value is checked.
// If it is, it executes the if statement and appends the value of the given checkbox to the "toppings" variable, with a ", " to seperate selections.

// The radio buttons work in a very similar way, except in one variable since only 1 size can be selected

