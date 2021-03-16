
function autoClick() {
    const autofilled = document.querySelectorAll('input:-webkit-autofill');
    if (autofilled.length === 2) {
        // document.querySelector("#submitButton").click();
        console.log(autofilled[0].value);
        document.querySelector("#userNameInput").focus();
        document.querySelector("#userNameInput").blur();
        const userNameInput = autofilled[0].value;
        const passwordInput = autofilled[1].value;
        const injectedCode = "Login.userNameInput = " + userNameInput + "; " +
            "Login.passwordInput = " + passwordInput + ";" +
            "Login.submitLoginRequest();";
        var script = document.createElement("script");
        const focusText = `
        document.querySelector("#submitButton").click();`
        script.textContent = focusText;
        (document.head).appendChild(script);

    }
}

console.log("auto login");
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        setTimeout(autoClick(), 3000);
    }
}