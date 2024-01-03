import { getAllCards } from "../../../../api/controller/cardController.js";
import { setDraggableEvent } from "../../events/dragCardEvent.js";
import { btnDel } from "../delete/deleteCard.js";
import { changeCardStatusContainer } from "../status/changeCardsStatusContainer.js";
import { clearCards } from "./clearCards.js";
import { errorMessage } from "../../events/snackBar.js";

export function listAllCards() {
    getAllCards()
        .then((data) => {
            const cards = data.map((card) => {
                return {
                    id: card.id,
                    title: card.title,
                    status: card.status,
                    description: card.description || null,
                };
            });

            clearCards(); // Limpa cards antigos
            changeCardStatusContainer(cards); //Distribui os cards baseado no seu status

            setDraggableEvent(); // adiciona evento drag dos cards
            btnDel(); // adiciona evento de delete dos cards
        })
        .catch(() => {
            errorMessage("Erro ao carregar tarefas");
        });
}
