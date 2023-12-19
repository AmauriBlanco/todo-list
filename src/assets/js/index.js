import { listAllCards } from "./card/showCards.js";
import { addNewCard } from "./card/newCard.js";
import { openModal, closeModal } from "./events/modalEvents.js";

const btnCreateNewCard = document.getElementById("new-item-icon");
const createNewCard = document.getElementById("new-item");
const btnCloseCreateNewCard = document.querySelector(".close");

// Listar todos os cards
listAllCards();

// Criar novo Card
const form = document.forms["addNewCard"];

// cria um novo card a partir das infos do form
form.addEventListener("submit", addNewCard);

// Abrir e fechar o modal de criação de novo item
openModal(btnCreateNewCard, createNewCard);
closeModal(btnCloseCreateNewCard, createNewCard);

// Abrir e fechar o modal de deletar item
