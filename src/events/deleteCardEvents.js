import { deleteCard } from "../card/delete/deleteCard.js";

export function deleteCardEvents() {
    const buttonsDeleteCard = document.querySelectorAll(".delete-item");
    console.log(buttonsDeleteCard);

    buttonsDeleteCard.forEach((button) => {
        button.addEventListener("click", async () => {
            showDeleteModalEvent();
            const confirmDeleteButton =
                document.querySelector("#confirm-delete");
            let getCardToRemove = confirmDeleteButtonEvent(button, confirmDeleteButton);
            cancelDeleteButtonEvent(confirmDeleteButton, getCardToRemove);
        });
    });
}

function showDeleteModalEvent() {
    getDeleteModal().showModal();
}

function confirmDeleteButtonEvent(button, confirmDeleteButton) {
    let getCardToRemove = async () => {
        //let cardToDelete = button.closest(".card");
        console.log(button);
        const itemId = button.getAttribute("id");

        let cardToDelete = document.getElementById(itemId);

        deleteCard(itemId, cardToDelete);
        confirmDeleteButton.removeEventListener("click", getCardToRemove);
    };

    confirmDeleteButton.addEventListener("click", getCardToRemove);

    return getCardToRemove;
}

function cancelDeleteButtonEvent(confirmDeleteButton, getCardToRemove) {
    const cancelButton = document.querySelector("#cancel-delete");
    cancelButton.addEventListener("click", () => {
        getDeleteModal().close();
        confirmDeleteButton.removeEventListener("click", getCardToRemove);
    });
}

function getDeleteModal() {
    return document.querySelector("#delete-confirm");
}
