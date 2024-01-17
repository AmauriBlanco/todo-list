function openModal(actionTrigger, modal) {
    actionTrigger.addEventListener("click", () => {
        modal.showModal();
    });
}

function closeModal(actionTrigger, modal) {
    actionTrigger.addEventListener("click", () => {
        modal.close();
    });
}


export { openModal, closeModal };