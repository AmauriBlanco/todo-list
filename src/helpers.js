function clearForm() {
    const form = document.forms["addNewCard"];
    const formInputs = form.querySelectorAll("input");
    formInputs.forEach((input) => {
        input.value = "";
    });
}

function clearCards() {
    const cardsContainer = document.querySelectorAll(".cards-container");
    cardsContainer.forEach((cardContainer) => {
        cardContainer.innerHTML = '';
    }
    );
}

export { clearForm, clearCards };
