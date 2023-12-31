const confirmDeleteButton = document.querySelector("#confirm-delete");
const cancelButton = document.querySelector("#cancel-delete");
const deleteCardModal = document.querySelector("#delete-confirm");

import { deleteCard } from "../../../../api/controller/cardController.js";
import { successMessage, errorMessage } from "../../events/snackBar.js";

export function btnDel() {
    let cardToDelete;
    const btnDeleteCard = document.querySelectorAll(".delete-item");

    btnDeleteCard.forEach((button) => {
        button.addEventListener("click", async () => {
            deleteCardModal.showModal();
            cardToDelete = button.closest(".card");

            const itemId = button.closest(".card").getAttribute("id");

            console.log(itemId);

            confirmDeleteButton.addEventListener("click", async () => {
                try {
                    // Chame a função deleteCard com o ID do item
                    await deleteCard(itemId);

                    // Remova o card do DOM
                    cardToDelete.remove();

                    // Feche o modal
                    deleteCardModal.close();

                    // Mensagem de sucesso ao deletar uma tarefa
                    successMessage("Tarefa deletada com sucesso!");
                } catch (error) {
                    errorMessage(error);
                    deleteCardModal.close();
                }
            });

            cancelButton.addEventListener("click", () => {
                deleteCardModal.close();
            });
        });
    });
}
