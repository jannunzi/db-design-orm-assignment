const EDITORS_URL = "http://localhost:8080/api/editors"

export const findAllEditors = () =>
    fetch(EDITORS_URL)
        .then(response => response.json())

export const findEditorById = (id) =>
    fetch(`${EDITORS_URL}/${id}`)
        .then(response => response.json())


export const deleteEditor = (id) =>
    fetch(`${EDITORS_URL}/${id}`, {
        method: "DELETE"
    })

export const createEditor = (editor) =>
    fetch(EDITORS_URL, {
        method: 'POST',
        body: JSON.stringify(editor),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateEditor = (id, editor) =>
    fetch(`${EDITORS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(editor),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllEditors,
    findEditorById,
    deleteEditor,
    createEditor,
    updateEditor
}
