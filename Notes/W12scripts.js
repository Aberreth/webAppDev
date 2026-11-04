console.log("interlinked")


//const form=document.getElementById("contactForm")
// This throws userinput into console.
//form.addEventListener("submit",function(event){
    //event.preventDefault(); // This stops the page from reloading when the user submits the form.
    // Get input value
    //const name=document.getElementById("name").value;
    // In the console, state the username.
    //console.log("Hello",name);
//});

// Display data on the page
const result=document.getElementById("contactForm")
result.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    console.log("Hello",name);
    result.innerHTML=`<p>Hello, ${name}! Thanks for submitting.</p>`;
});