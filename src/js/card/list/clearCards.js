export function clearCards() {
    const cardsContainer = document.querySelectorAll(".cards-container");
    cardsContainer.forEach((cardContainer) => {
        cardContainer.innerHTML = '';
    }
    );
}