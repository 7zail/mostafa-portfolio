const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, Mostafa! Your message has been received.");

    form.reset();

});
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

});