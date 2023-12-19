import { createNewCard } from "../../../api/controller/cardController.js";
import { listAllCards } from "./showCards.js";

const createNewTaskModal = document.getElementById("new-item");

function addNewCard(event) {
    event.preventDefault();

    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;

    if (taskTitle) {
        createNewCard(taskTitle, taskDescription).then(() => {
            listAllCards();

            createNewTaskModal.close();
        });
    } else {
        alert("Informe um título para a tarefa!");
    }
}

export { addNewCard };
