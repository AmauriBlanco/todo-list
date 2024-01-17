function successMessage(message) {
    const successMessage = document.getElementById("success-message");
    successMessage.innerHTML = message;
    successMessage.classList.add("show");
    setTimeout(function () {
        successMessage.classList.remove("show");
    }, 3000);
}

function errorMessage(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML += message;
    errorMessage.classList.add("show");
    setTimeout(function () {
        errorMessage.classList.remove("show");
    }, 3000);
}

export { successMessage, errorMessage };
