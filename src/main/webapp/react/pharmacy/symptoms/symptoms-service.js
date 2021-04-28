const PRESCRIPTION_URL = "http://localhost:8080/api/prescriptions"
const SYMPTOM_URL = "http://localhost:8080/api/symptoms"

export const createSymptomForPrescription = (prescriptionId, symptom) =>
    fetch(`${PRESCRIPTION_URL}/${prescriptionId}/symptoms`, {
        method: 'POST',
        body: JSON.stringify(symptom),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findSymptomsForPrescription = (prescriptionId) =>
    fetch(`${PRESCRIPTION_URL}/${prescriptionId}/symptoms`)
        .then(response => response.json())

export const findSymptomById = (id) =>
    fetch(`${SYMPTOM_URL}/${id}`)
        .then(response => response.json())

export const updateSymptom = (id, symptom) =>
    fetch(`${SYMPTOM_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(symptom),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteSymptom = (id) =>
    fetch(`${SYMPTOM_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createSymptomForPrescription,
    findSymptomsForPrescription,
    findSymptomById,
    updateSymptom,
    deleteSymptom
}