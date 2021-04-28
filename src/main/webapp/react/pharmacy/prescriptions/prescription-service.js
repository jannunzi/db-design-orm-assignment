const PATIENT_URL = "http://localhost:8080/api/patients"
const PRESCRIPTION_URL = "http://localhost:8080/api/prescriptions"

export const createPrescriptionForPatient = (patientId, prescription) =>
    fetch(`${PATIENT_URL}/${patientId}/prescriptions`, {
        method: 'POST',
        body: JSON.stringify(prescription),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findPrescriptionsForPatient = (patientId) =>
    fetch(`${PATIENT_URL}/${patientId}/prescriptions`)
        .then(response => response.json())

export const findPrescriptionById = (id) =>
    fetch(`${PRESCRIPTION_URL}/${id}`)
        .then(response => response.json())

export const updatePrescription = (id, prescription) =>
    fetch(`${PRESCRIPTION_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(prescription),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deletePrescription = (id) =>
    fetch(`${PRESCRIPTION_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createPrescriptionForPatient,
    findPrescriptionsForPatient,
    findPrescriptionById,
    updatePrescription,
    deletePrescription
}