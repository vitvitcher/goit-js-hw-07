const nameInput = document.getElementById("name-input")
const greeting = document.getElementById("name-output")

nameInput.addEventListener("input", (event) => {
    const eventValue = event.currentTarget.value.trim()
    if (eventValue === "") {
        greeting.textContent = "Anonymous"
    }
    else {
        greeting.textContent = eventValue
    }
});