function successMessage(message) {
    const successContainer = document.getElementById("success");
    const successMessage = successContainer.querySelector("#success-message");
    successMessage.innerHTML = message;
    successContainer.classList.add("show");
    setTimeout(function () {
        successContainer.classList.remove("show");
    }, 3000);
}

function errorMessage(message) {
    const errorContainer = document.getElementById("error")
    const errorMessage = errorContainer.querySelector("#error-message");
    errorMessage.innerHTML = message;
    errorContainer.classList.add("show");
    setTimeout(function () {
        errorContainer.classList.remove("show");
    }, 3000);
}

export { successMessage, errorMessage };
