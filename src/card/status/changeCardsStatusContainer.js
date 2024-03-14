import { changeStatus } from "../../repository/cardRepository.js";

export function changeCardStatus(card, statusArea) {
    const cardStatus = statusArea.parentNode;
    if (cardStatus.classList.contains("NEW")) {
        changeStatus(card.id, "NEW");
    }
    if (cardStatus.classList.contains("DOING")) {
        changeStatus(card.id, "DOING");
    }
    if (cardStatus.classList.contains("FINISHED")) {
        changeStatus(card.id, "FINISHED");
    }
}
