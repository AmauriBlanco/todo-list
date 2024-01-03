import { changeCardStatus } from "../card/status/changeCardsStatusContainer.js";

const cardsContainer = document.querySelectorAll(".cards-container");
function setDraggableEvent() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.setAttribute("data-card-index", index);
        card.addEventListener("dragstart", dragStart);
    });
}

function dragStart(event) {
    const cardIndex = event.target.getAttribute("data-card-index");
    event.dataTransfer.setData("text/plain", cardIndex);
}

cardsContainer.forEach((dragArea) => {
    dragArea.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    dragArea.addEventListener("drop", (event) => {
        event.preventDefault();
        const cardIndex = event.dataTransfer.getData("text/plain");
        const draggedCard = document.querySelector(
            `[data-card-index="${cardIndex}"]`
        );
        dragArea.appendChild(draggedCard);
        changeCardStatus(draggedCard, dragArea);
    });
});

export { setDraggableEvent };
