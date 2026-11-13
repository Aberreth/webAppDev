const contactForm = document.getElementById("contactForm");
const result = document.getElementById("results");
let fail = false

// Each of these check for the field being invalid when the user leaves it.
const username = document.getElementById("username");
username.addEventListener("blur", () => {
    console.log("The user left the name field.");
    if (username.value.trim() === "") {
        usernameError.innerHTML = `Enter valid username`
        success.innerHTML = ``
        fail = true
}
    else {
        usernameError.innerHTML = ``
        fail = false
}});

const email = document.getElementById("email");
email.addEventListener("blur", () => {
    console.log("The user left the email field.");
    if (email.value.trim() === "") {
        emailError.innerHTML = `Enter valid email`
        success.innerHTML = ``
        fail = true
}
    else {
        emailError.innerHTML = ``
        fail = false
}});

const age = document.getElementById("age");
age.addEventListener("blur", () => {
    console.log("The user left the age field.");
    if (age.value.trim() === "") {
        ageError.innerHTML = `Enter valid age`
        success.innerHTML = ``
        fail = true
    }
    else {
        ageError.innerHTML = ``
        fail = false
}});

// Listen for form submission
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Prevents the success message in case the user never enters any fields, and clears error messages if the form is submitted with valid information
    if (username.value.trim() === "") {
       usernameError.innerHTML = `Enter valid username`
       fail = true
}
    else {
        emailError.innerHTML = ``
};
    if (email.value.trim() === "") {
        emailError.innerHTML = `Enter valid email`
        fail = true
}
    else {
        emailError.innerHTML = ``
};
    if (age.value.trim() === "") {
        ageError.innerHTML = `Enter valid username`
        fail = true
}
    else {
        ageError.innerHTML = ``
};   
    console.log(fail)

    // Display a success message if all checks have passed
    if (fail === false) {
        success.innerHTML = `<h3>Success!</h3>`
    }
    else {
        success.innerHTML = ``
    };
});