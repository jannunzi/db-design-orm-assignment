const THEATER_URL = 'http://localhost:8080/api/theaters'

const findAllTheaters = () => {
    return fetch(THEATER_URL)
        .then((response) => {
            return response.json()
        })
}

const findTheaterById = (tid) => {
    return fetch(`${THEATER_URL}/${tid}`)
        .then((response) => {
            return response.json()
        })
}

const updateTheaterName = (tid, newTheaterName) => {
    return fetch(`${THEATER_URL}/${tid}/name/${newTheaterName}`)
        .then((response) => {
            return response.json()
        })
}

export default {
    findAllTheaters,
    findTheaterById,
    updateTheaterName
}