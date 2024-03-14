import { createNew } from "../../repository/cardRepository.js";
import { listAllCards } from "../list/showCards.js";
import { successMessage, errorMessage } from "../../events/snackBar.js";
import { clearForm } from "../../helpers.js";

async function addNewCard(event) {
    event.preventDefault();

    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;

    if (taskTitle && taskDescription) {
        try {
            await createNew(taskTitle, taskDescription);

            // Mensagem de sucesso ao criar nova tarefa
            successMessage(`Tarefa <i>${taskTitle}</i>, criada com sucesso!`);

            // Listar todas as tarefas novamente
            await listAllCards();

            const createNewTaskModal = document.getElementById("new-item");
            createNewTaskModal.close();
            clearForm();
        } catch (error) {
            // Mensagem de erro ao criar nova tarefa
            errorMessage(error);
            //"Houve um problema ao criar a tarefa!"
        }
    }
}

export { addNewCard };
