import { addNewCard } from "../card/create/newCard.js";
import { openModal, closeModal } from "./modalEvents.js";

const form = document.forms["addNewCard"];

export function createCardEvents() {
    const btncreateNew = document.getElementById("new-item-icon"); //melhorar o nome do item no html e aqui
    const createNew = document.getElementById("new-item");//melhorar o nome do item no html e aqui
    openModal(btncreateNew, createNew); //melhorar nome variáveis

    const btnClosecreateNew = document.querySelector(".close"); //melhorar o nome do item no html e aqui
    closeModal(btnClosecreateNew, createNew);//melhorar nome variáveis

    form.addEventListener("submit", addNewCard);
}
