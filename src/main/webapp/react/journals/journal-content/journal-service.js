const JOURNAL_URL = "http://localhost:8080/api/journals"

export const findAllJournals = () =>
    fetch(JOURNAL_URL)
        .then(response => response.json())

export const findJournalById = (id) =>
    fetch(`${JOURNAL_URL}/${id}`)
        .then(response => response.json())


export const deleteJournal = (id) =>
    fetch(`${JOURNAL_URL}/${id}`, {
        method: "DELETE"
    })

export const createJournal = (journal) =>
    fetch(JOURNAL_URL, {
        method: 'POST',
        body: JSON.stringify(journal),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateJournal = (id, journal) =>
    fetch(`${JOURNAL_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(journal),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllJournals,
    findJournalById,
    deleteJournal,
    createJournal,
    updateJournal
}
