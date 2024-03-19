import { deleteById } from "../../repository/cardRepository.js";
import { statusMessage } from "../../snackBar.js";

export async function deleteCard(itemId, cardToDelete) {
    try {
        // Chame a função deleteCard com o ID do item
        await deleteById(itemId);

        // Remova o card do DOM
        cardToDelete.remove();

        // Mensagem de sucesso ao deletar uma tarefa
        statusMessage("Tarefa deletada com sucesso!", "success");
    } catch (error) {
        statusMessage(error, "error");
    }

    const deleteCardModal = document.querySelector("#delete-confirm");
    deleteCardModal.close();
}
