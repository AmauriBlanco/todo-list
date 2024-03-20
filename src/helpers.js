function clearForm() {
    const form = document.forms["addNewCard"];
    const formInputs = form.querySelectorAll("input");
    formInputs.forEach((input) => {
        input.value = "";
    });
}

function clearCards() {
    const cardsContainer = document.querySelectorAll(".cards-container");
    cardsContainer.forEach((cardContainer) => {
        cardContainer.innerHTML = '';
    }
    );
}

function myFetch(path, options = {}) {
    const defaultHeaders = {
      'Content-Type': 'application/json', // Adjust as needed
      // Add other default headers here
    };
  
    const mergedOptions = {
      ...options, // Spread existing options
      headers: {
        ...defaultHeaders,
        ...options.headers, // Override defaults with specific headers
      },
    };

    let url = `https://alunos.treinaweb.com.br/twtodos/api/v1${path}`;
  
    return fetch(url, mergedOptions);
  }

export { clearForm, clearCards, myFetch };
