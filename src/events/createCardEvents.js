import { addNewCard } from "../card/create/newCard.js";
import { openModal, closeModal } from "./modalEvents.js";

const form = document.forms["addNewCard"];

export function createCardEvents() {
    const btnCreateNewCard = document.getElementById("new-item-icon");
    const createNewCard = document.getElementById("new-item");
    const btnCloseCreateNewCard = document.querySelector(".close");

    openModal(btnCreateNewCard, createNewCard);
    closeModal(btnCloseCreateNewCard, createNewCard);

    form.addEventListener("submit", addNewCard);
}
