import { createNewCard } from "../../../../api/controller/cardController.js";
import { listAllCards } from "../dom/showCards.js";
import { successMessage, errorMessage } from "../../events/snackBar.js";

const createNewTaskModal = document.getElementById("new-item");

function addNewCard(event) {
    event.preventDefault();

    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;

    if (taskTitle && taskDescription) {
        createNewCard(taskTitle, taskDescription)
            .then(() => {
                createNewTaskModal.close();
                listAllCards();
                // Mensagem de sucesso ao criar nova tarefa
                successMessage(
                    `Tarefa <i>${taskTitle}</i>, criada com sucesso!`
                );
            })
            .catch(() => {
                // Mensagem de erro ao criar nova tarefa
                errorMessage("Houve um problema ao criar a tarefa!");
                createNewTaskModal.close();
            });
    }
}

export { addNewCard };
