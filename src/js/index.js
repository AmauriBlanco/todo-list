import { listAllCards } from "./card/list/showCards.js";
import { formSubmit } from "./events/formEvent.js";
import { openModal, closeModal } from "./events/modalEvents.js";

const btnCreateNewCard = document.getElementById("new-item-icon");
const createNewCard = document.getElementById("new-item");
const btnCloseCreateNewCard = document.querySelector(".close");

// Listar todos os cards
listAllCards();

// submit Form
formSubmit();

// Abrir e fechar o modal de criação de novo item
openModal(btnCreateNewCard, createNewCard);
closeModal(btnCloseCreateNewCard, createNewCard);

// Abrir e fechar o modal de deletar item
