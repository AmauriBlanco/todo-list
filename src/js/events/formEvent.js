import { addNewCard } from "../card/create/newCard.js";

const form = document.forms["addNewCard"];

function formSubmit() {
    // Criar novo Card
        // cria um novo card a partir das infos do form
    form.addEventListener("submit", addNewCard);
}

function clearForm() {
    const formInputs = form.querySelectorAll('input');
    formInputs.forEach(input => {
        input.value = "";
    });
}

export {formSubmit, clearForm}
