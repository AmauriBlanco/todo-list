const url = "https://alunos.treinaweb.com.br/twtodos/api/v1/todos";
async function getAllCards() {
    return await fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        }).catch((error) => {
            return error
        })
}

async function deleteCard(id) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return "Item deletado com sucesso";
        } else {
            throw new Error("Falha ao deletar o item");
        }
    } catch (error) {
        throw new Error("Erro ao tentar deletar o item");
    }
}

async function createNewCard(title, description = null) {
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            description,
        }),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro ao criar um novo cartão');
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
}

async function changeStatusCard(id, status) {
    return await fetch(`${url}/${id}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            status,
        }),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
}

export { createNewCard, deleteCard, getAllCards, changeStatusCard };
