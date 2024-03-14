const deleteCardModal = document.querySelector("#delete-confirm");

import { deleteById } from "../../repository/cardRepository.js";
import { successMessage, errorMessage } from "../../events/snackBar.js";

export async function deleteCard(itemId, cardToDelete) {
    try {
        // Chame a função deleteCard com o ID do item
        await deleteById(itemId);

        // Remova o card do DOM
        cardToDelete.remove();

        // Mensagem de sucesso ao deletar uma tarefa
        successMessage("Tarefa deletada com sucesso!");
    } catch (error) {
        errorMessage(error);
    }
    deleteCardModal.close();
}
