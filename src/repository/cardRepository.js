const url = "https://alunos.treinaweb.com.br/twtodos/api/v1/todos";

async function getAllCards() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}


async function deleteCard(id) {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Falha ao deletar o item");
    }

    return "Item deletado com sucesso";
}

async function createNewCard(title, description = null) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            description,
        }),
    });

    if (!response.ok) {
        throw new Error('Erro ao criar nova tarefa');
    }

    return await response.json();
}

async function changeStatusCard(id, status) {
    const response = await fetch(`${url}/${id}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            status,
        }),
    });

    if (!response.ok) {
        throw new Error('Erro ao alterar status do cartão');
    }

    return await response.json();
}

export { createNewCard, deleteCard, getAllCards, changeStatusCard };
