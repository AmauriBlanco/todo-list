import { myFetch } from "../helpers.js";

async function getAll() {
    try {
        const response = await myFetch("/todos");
        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
}

async function deleteById(id) {
    const response = await myFetch(`/todos/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Falha ao deletar o item");
    }

    return "Item deletado com sucesso";
}

async function createNew(title, description = null) {
    const response = await myFetch("/todos", {
        method: "POST",
        body: JSON.stringify({
            title,
            description,
        }),
    });

    if (!response.ok) {
        throw new Error("Erro ao criar nova tarefa");
    }

    return await response.json();
}

async function changeStatus(id, status) {
    const response = await myFetch(`/todos/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({
            status,
        }),
    });

    if (!response.ok) {
        throw new Error("Erro ao alterar status do cartão");
    }

    return await response.json();
}

export { createNew, deleteById, getAll, changeStatus };
