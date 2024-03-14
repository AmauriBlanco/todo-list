import { getAll } from "../../repository/cardRepository.js";
import { setDraggableEvent } from "../../events/dragCardEvent.js";
import { render } from "../create/createCardElement.js";
import { deleteCardEvents } from "../../events/deleteCardEvents.js";
import { clearCards } from "../../helpers.js";
import { errorMessage } from "../../events/snackBar.js";

export async function listAllCards() {
    try {
        const cards = await getAll();

        console.log(cards);

        clearCards(); // Limpa cards antigos

        // Distribui os cards baseado no seu status
        cards.forEach((card) => {
            return render(card);
        });

        setDraggableEvent(); // Adiciona evento drag dos cards
        deleteCardEvents(); // Adiciona evento de delete dos cards
    } catch (error) {
        errorMessage("Erro ao carregar tarefas");
    }
}
