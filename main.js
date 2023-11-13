let wrongMail = false;
let mailSub = document.getElementById("mailSub");

mailSub.addEventListener("submit", (e) => {
  const email = document.querySelector("input").value;
  let hasSpace = email.indexOf(" ") !== -1;
  let hasAt = email.indexOf("@") === -1;
  let isValidDomain = /^[^\s@]+\.([a-z]{2,10})$/i.test(email.split("@")[1]);

  e.preventDefault();
  if (hasSpace || hasAt || !isValidDomain) {
    displayError();
  } else {
    success();
  }
});

function displayError() {
  if (!wrongMail) {
    // Add error message:
    const lables = document.getElementById("labels");
    wrongMail = true;
    const errorMsg = document.createElement("label");
    errorMsg.id = "errorMsg";
    errorMsg.appendChild(document.createTextNode("Valid email required"));
    lables.insertAdjacentElement("beforeend", errorMsg);

    // Paint in red
    const emailInput = document.querySelector("input");
    emailInput.classList.add("errorState");
  } else {
    return;
  }
}

function success() {
    console.log("success");
    const pageSuccessContent = `
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
      <link rel="stylesheet" href="./style.css">
      <link rel="stylesheet" href="./success.css">
      <title>Frontend Mentor | Newsletter sign-up form with success message</title>
    </head>
    <body>
      <section id="success-page">
        <!-- Success message start -->
        <div class="successMsg">
            <img class="successPageLogo" src="./assets/images/icon-list.svg" alt="">
            <h1 >Thanks for subscribing!</h1>
            <p>
                A confirmation email has been sent to <strong>${document.querySelector("input").value}</strong>. 
                Please open it and click the button inside to confirm your subscription. 
            </p>
        </div>
        <button id="reloadBtn">Dismiss message</button>
        </section>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/LironeFitoussi">Lirone Fitoussi</a>.
      </div>
    
      <script src="./main.js"></script>
    </body>
      `;
      document.querySelector("html").innerHTML = pageSuccessContent;
  
      document.getElementById("reloadBtn").addEventListener("click", () => {
        console.log("Click");
        location.reload();
      });
  }
  
