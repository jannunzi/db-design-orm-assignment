// TODO: declare URL where server listens for HTTP requests
const DOCTORS_URL = "http://localhost:8080/api/doctors"

// TODO: retrieve all docs from the server
export const findAllDoctors = () =>
    fetch(DOCTORS_URL).then(response => response.json())

// TODO: retrieve a single doc by their ID
export const findDoctorById = (id) =>
    fetch(`${DOCTORS_URL}/${id}`).then(response => response.json())

// TODO: delete a doc by their ID
export const deleteDoctor = (id) =>
    fetch(`${DOCTORS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new user
export const createDoctor = (doctor) =>
    fetch(DOCTORS_URL, {
        method: 'POST',
        body: JSON.stringify(doctor),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

// TODO: update a user by their ID
export const updateDoctor = (id, doctor) =>
    fetch(`${DOCTORS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(doctor),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())


// TODO: export all functions as the API to this service
export default {
findAllDoctors,
findDoctorById,
deleteDoctor,
createDoctor,
updateDoctor}
