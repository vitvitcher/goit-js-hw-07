const loginForm = document.querySelector(".login-form")
const button = loginForm.querySelector("button")

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === "" || password === "") {
        alert("All form fields must be filled in")
        return
    }
    const formOutput = {};
    formOutput.email = email;
    formOutput.password = password

    console.log(formOutput)
});
