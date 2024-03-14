import { changeStatusCard } from "../../repository/cardRepository.js";

export function changeCardStatus(card, statusArea) {
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
