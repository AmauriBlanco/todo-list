import { createNewCard } from "../../../repository/cardRepository.js";
import { listAllCards } from "../list/showCards.js";
import { successMessage, errorMessage } from "../../events/snackBar.js";
import { clearForm} from "../../events/formEvent.js"

function addNewCard(event) {
    event.preventDefault();

    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;

    if (taskTitle && taskDescription) {
        const createNewTaskModal = document.getElementById("new-item");
        createNewCard(taskTitle, taskDescription)
            .then(() => {
                listAllCards();
                // Mensagem de sucesso ao criar nova tarefa
                successMessage(
                    `Tarefa <i>${taskTitle}</i>, criada com sucesso!`
                );
                clearForm();
            })
            .catch(() => {
                // Mensagem de erro ao criar nova tarefa
                errorMessage("Houve um problema ao criar a tarefa!");
            });
        createNewTaskModal.close();
    }
}

export { addNewCard };
