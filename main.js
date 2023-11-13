let wrongMail = false
let mailSub = document.getElementById("mailSub")

mailSub.addEventListener("submit", (e) => {
    const email = document.querySelector("input").value
    let hasSpace = email.indexOf(' ') !== -1;
    let hasAt = email.indexOf("@") === -1;
    let isValidDomain = /^[^\s@]+\.([a-z]{2,10})$/i.test(email.split('@')[1]); 

    e.preventDefault();
    if (hasSpace || hasAt || !isValidDomain ) {
        displayError()
    } else {
        success();
    }
})

function displayError() {
    if (!wrongMail) {
        // Add error message:
        const lables = document.getElementById("labels")
        wrongMail = true
        const errorMsg = document.createElement("label");
        errorMsg.id = "errorMsg"
        errorMsg.appendChild(document.createTextNode("Valid email required"));
        lables.insertAdjacentElement("beforeend", errorMsg)

        // Paint in red
        const emailInput = document.querySelector("input")
        emailInput.classList.add("errorState")
    } else {
        return
    }
}

function success() {
    console.log("success");
}