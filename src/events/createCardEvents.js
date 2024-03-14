import { addNewCard } from "../card/create/newCard.js";
import { openModal, closeModal } from "./modalEvents.js";

const form = document.forms["addNewCard"];

export function createCardEvents() {
    const btncreateNew = document.getElementById("new-item-icon");
    const createNew = document.getElementById("new-item");
    const btnClosecreateNew = document.querySelector(".close");

    openModal(btncreateNew, createNew);
    closeModal(btnClosecreateNew, createNew);

    form.addEventListener("submit", addNewCard);
}
