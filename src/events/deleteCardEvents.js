const confirmDeleteButton = document.querySelector("#confirm-delete");
const cancelButton = document.querySelector("#cancel-delete");
const deleteCardModal = document.querySelector("#delete-confirm");

import { deleteCard } from "../card/delete/deleteCard.js";

export function deleteCardEvents() {
    let cardToDelete;
    const btnDeleteCard = document.querySelectorAll(".delete-item");

    btnDeleteCard.forEach((button) => {
        button.addEventListener("click", async () => {
            deleteCardModal.showModal();
            cardToDelete = button.closest(".card");

            const itemId = button.closest(".card").getAttribute("id");

            confirmDeleteButton.addEventListener("click", async () => {
                deleteCard(itemId, cardToDelete);
            });

            cancelButton.addEventListener("click", () => {
                deleteCardModal.close();
            });
        });
    });
}
