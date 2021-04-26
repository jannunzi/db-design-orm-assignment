const AUTHORS_URL = "http://localhost:8080/api/authors"

export const findAllAuthors = () =>
    fetch(AUTHORS_URL)
        .then(response => response.json())

export const findAuthorById = (id) =>
    fetch(`${AUTHORS_URL}/${id}`)
        .then(response => response.json())


export const deleteAuthor = (id) =>
    fetch(`${AUTHORS_URL}/${id}`, {
        method: "DELETE"
    })

export const createAuthor = (author) =>
    fetch(AUTHORS_URL, {
        method: 'POST',
        body: JSON.stringify(author),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateAuthor = (id, author) =>
    fetch(`${AUTHORS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(author),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllAuthors,
    findAuthorById,
    deleteAuthor,
    createAuthor,
    updateAuthor
}
