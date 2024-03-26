import { addNewCard } from "../card/create/newCard.js";
import { openModal, closeModal } from "./modalEvents.js";

const form = document.forms["addNewCard"];

export function createCardEvents() {
    const newCardTrigger = document.getElementById("new-card-trigger"); //melhorar o nome do item no html e aqui
    const newCardModal = document.getElementById("new-card-modal");//melhorar o nome do item no html e aqui
    openModal(newCardTrigger, newCardModal); //melhorar nome variáveis

    const closeNewCardModal = document.querySelector(".close-new-card-modal"); //melhorar o nome do item no html e aqui
    closeModal(closeNewCardModal, newCardModal);//melhorar nome variáveis

    form.addEventListener("submit", addNewCard);
}
