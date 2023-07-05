const url = 'https://api.thecatapi.com/v1';
// const api_key = "live_i0tDaOGInqQ26rh7JUwZgUxN2ia9tgGfeQAmLlGg5e4sjZuijJKVoZO121TcrnQ9";

const api_key = "live_QWpcFK8RDQNixTwCH3rDYVV7QVkC4CMtlgILvCFvVqu3G5nagZEgozDLY8826ZG3";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};