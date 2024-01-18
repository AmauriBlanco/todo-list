import { createCardElement } from "../create/createCardElement.js";
import { changeStatusCard } from "../../../repository/cardRepository.js";

function changeCardStatusContainer(cardList) {
    cardList.forEach((card) => {
        return createCardElement(card);
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
