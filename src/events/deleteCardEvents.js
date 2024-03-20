import { deleteCard } from "../card/delete/deleteCard.js";

export function deleteCardEvents() {
    const buttonsDeleteCard = document.querySelectorAll(".delete-item");

    buttonsDeleteCard.forEach((button) => {
        button.addEventListener("click", async () => {
            showDeleteModalEvent();

            const confirmDeleteButton = document.querySelector("#confirm-delete");
            let deleteCardFn = confirmDeleteButtonEvent(button, confirmDeleteButton);

            cancelDeleteButtonEvent(confirmDeleteButton, deleteCardFn);
        });
    });
}

function showDeleteModalEvent() {
    getDeleteModal().showModal();
}

function confirmDeleteButtonEvent(button, confirmDeleteButton) {
    let deleteCardFn = async () => {
        const itemId = button.getAttribute("id");

        let cardToDelete = document.getElementById(itemId);

        deleteCard(itemId, cardToDelete);
        confirmDeleteButton.removeEventListener("click", deleteCardFn);
    };

    confirmDeleteButton.addEventListener("click", deleteCardFn);

    return deleteCardFn;
}

function cancelDeleteButtonEvent(confirmDeleteButton, deleteCardFn) {
    const cancelButton = document.querySelector("#cancel-delete");
    
    cancelButton.addEventListener("click", () => {
        getDeleteModal().close();
        confirmDeleteButton.removeEventListener("click", deleteCardFn);
    });
}

function getDeleteModal() {
    return document.querySelector("#delete-confirm");
}
