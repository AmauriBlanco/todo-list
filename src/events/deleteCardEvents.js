import { deleteCard } from "../card/delete/deleteCard.js";

export function deleteCardEvents() {
    const buttonsDeleteCard = document.querySelectorAll(".delete-item");

    buttonsDeleteCard.forEach((button) => {
        button.addEventListener("click", async () => {
            showDeleteModalEvent();

            confirmDeleteButtonEvent(button)
            
            cancelDeleteButtonEvent();
        });
    });
}

function showDeleteModalEvent() {
    getDeleteModal().showModal();
}

function confirmDeleteButtonEvent(button) {
    const confirmDeleteButton = document.querySelector("#confirm-delete");
    confirmDeleteButton.addEventListener("click", async () => {
        let cardToDelete = button.closest(".card");
        const itemId = button.closest(".card").getAttribute("id");

        deleteCard(itemId, cardToDelete);
    });
}

function cancelDeleteButtonEvent() {
    const cancelButton = document.querySelector("#cancel-delete");
    cancelButton.addEventListener("click", () => {
        getDeleteModal().close();
    });
}

function getDeleteModal() {
    return document.querySelector("#delete-confirm");
}
