import { getAllCards } from "../../repository/cardRepository.js";
import { setDraggableEvent } from "../../events/dragCardEvent.js";
import { btnDel } from "../delete/deleteCard.js";
import { changeCardStatusContainer } from "../status/changeCardsStatusContainer.js";
import { clearCards } from "../../helpers.js";
import { errorMessage } from "../../events/snackBar.js";

export async function listAllCards() {
    try {
        const data = await getAllCards();
        const cards = data.map((card) => {
            return {
                id: card.id,
                title: card.title,
                status: card.status,
                description: card.description || null,
            };
        });

        clearCards(); // Limpa cards antigos
        changeCardStatusContainer(cards); // Distribui os cards baseado no seu status

        setDraggableEvent(); // Adiciona evento drag dos cards
        btnDel(); // Adiciona evento de delete dos cards
    } catch (error) {
        errorMessage("Erro ao carregar tarefas");
    }
}
