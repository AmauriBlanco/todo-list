async function getAllCards() {
    return await fetch("https://alunos.treinaweb.com.br/twtodos/api/v1/todos")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
}

async function deleteCard(id) {
    try {
        const response = await fetch(
            `https://alunos.treinaweb.com.br/twtodos/api/v1/todos/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.ok) {
            return "Item deletado com sucesso";
        } else {
            throw new Error("Falha ao deletar o item");
        }
    } catch (error) {
        throw new Error("Erro ao tentar deletar o item");
    }
}

async function createNewCard(title, description = "") {
    return await fetch("https://alunos.treinaweb.com.br/twtodos/api/v1/todos", {
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
            return response.json();
        })
        .then((data) => {
            return data;
        });
}

export async function changeStatusCard(id, status) {
    return await fetch(`https://alunos.treinaweb.com.br/twtodos/api/v1/todos/${id}`, {
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
        })
}

export { createNewCard, deleteCard, getAllCards };
