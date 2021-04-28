const DOCTOR_URL = "http://localhost:8080/api/doctors"
const PATIENT_URL = "http://localhost:8080/api/patients"

export const createPatientForDoctor = (id, patient) =>
    fetch(`${DOCTOR_URL}/${id}/patients`, {
        method: 'POST',
        body: JSON.stringify(patient),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findPatientsForDoctor = (id) =>
    fetch(`${DOCTOR_URL}/${id}/patients`)
        .then(response => response.json())

export const findPatientById = (id) =>
    fetch(`${PATIENT_URL}/${id}`)
        .then(response => response.json())

export const updatePatient = (id, patient) =>
    fetch(`${PATIENT_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(patient),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deletePatient = (id) =>
    fetch(`${PATIENT_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createPatientForDoctor,
    findPatientsForDoctor,
    findPatientById,
    updatePatient,
    deletePatient
}