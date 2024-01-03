import { createCardElement } from "../create/createCardElement.js";
import { changeStatusCard } from "../../../../api/controller/cardController.js";
function changeCardStatusContainer(cardList) {
    cardList.forEach((card) => {
        if (card.status === "NEW") {
            return createCardElement(card)
        }
        if (card.status === "DOING") {
            return createCardElement(card)
        }
        if (card.status === "FINISHED") {
            return createCardElement(card)
        }
    });
}

function changeCardStatus(card, statusArea) {
    const cardStatus = statusArea.parentNode;
    if (cardStatus.classList.contains("NEW")) {
        changeStatusCard(card.id, "NEW");
    }
    if (cardStatus.classList.contains("DOING")) {
        changeStatusCard(card.id, "DOING");
    }
    if (cardStatus.classList.contains("FINISHED")) {
        changeStatusCard(card.id, "FINISHED");
    }
}

export { changeCardStatus, changeCardStatusContainer };