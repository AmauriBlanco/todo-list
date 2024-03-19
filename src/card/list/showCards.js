import { getAll } from "../../repository/cardRepository.js";
import { dragCardEvents } from "../../events/dragCardEvents.js";
import { render } from "../create/createCardElement.js";
import { deleteCardEvents } from "../../events/deleteCardEvents.js";
import { clearCards } from "../../helpers.js";
import { statusMessage } from "../../snackBar.js";

export async function listAllCards() {
    try {
        clearCards(); // Limpa cards antigos

        const cards = await getAll();

        // Distribui os cards baseado no seu status
        cards.forEach((card) => {
            return render(card);
        });

        dragCardEvents(); // Adiciona evento drag dos cards
        deleteCardEvents(); // Adiciona evento de delete dos cards
    } catch (error) {
        statusMessage("Erro ao carregar tarefas", 'error');
    }
}
