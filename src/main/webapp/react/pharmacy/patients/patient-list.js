import PatientEditorInline from "./inline-patient-editor";
import patientService, {createPatientForDoctor} from "./patient-service"

const DOCTOR_URL = "http://localhost:8080/api/patients"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const PatientList = () => {
    const [patients, setPatients] = useState([])
    const [newPatient, setNewPatient] = useState({})
    const {id} = useParams()
    useEffect(() => {
    findPatientsForDoctor(id)
    }, [])
    const createPatientForDoctor = (patient) =>
        patientService.createPatientForDoctor(id, patient)
            .then(patient => {
                setNewPatient({firstname:''})
                setPatients(patients => ([...patients, patient]))
            })
    const updatePatient = (id, newPatient) =>
        patientService.updatePatient(id, newPatient)
            .then(patient => setPatients(patients => (patients.map(patient => patient.id === id ? newPatient : patient))))
    const findPatientsForDoctor = (id) =>
        patientService.findPatientsForDoctor(id)
            .then(patients => setPatients(patients))
    const deletePatient = (id) =>
        patientService.deletePatient(id)
            .then(patients => setPatients(patients => patients.filter(patient => patient.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Patients
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Patient firstname"
                                   title="Please enter a name for the patient"
                                   className="form-control"
                                   value={newPatient.title}
                                   onChange={(e) => setNewPatient(newPatient => ({...newPatient, firstname: e.target.value}))}/>
                        </div>
                        <div className="col">
                       <input placeholder="Patient lastname"
                                         title="Please enter a lastname for the patient"
                                   className="form-control"
                                     value={newPatient.lastname}
                                       onChange={(e) => setNewPatient(newPatient => ({...newPatient, lastname: e.target.value}))}/>
                          </div>
                            <div className="col">
                            <input placeholder="Patient username"
                                   title="Please enter a username for the patient"
                                   className="form-control"
                                   value={newPatient.username}
                                   onChange={(e) => setNewPatient(newPatient => ({...newPatient, username: e.target.value}))}/>
                        </div>
<div className="col">
                            <input placeholder="Patient password"
                                   title="Please enter a password for the patient"
                                   className="form-control"
                                   value={newPatient.password}
                                   onChange={(e) => setNewPatient(newPatient => ({...newPatient, password: e.target.value}))}/>
                        </div>
                        <div className ="col">
                            <input placeholder="Patient email"
                                                        title="Please enter an email for the patient"
                                                        className="form-control"
                                                        value={newPatient.email}
                                                        onChange={(e) => setNewPatient(newPatient => ({...newPatient, email: e.target.value}))}/>
                                             </div>
                        <div className="col">
                            <input placeholder="Year"
                                   title="Please enter a Year for the patient"
                                   className="form-control"
                                   value={newPatient.DOB}
                                   onChange={(e) => setNewPatient(newPatient => ({...newPatient, DOB: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Patient Conditions"
                                   title="Please enter conditions for the patient"
                                   className="form-control"
                                   value={newPatient.conditions}
                                   onChange={(e) => setNewPatient(newPatient => ({...newPatient, conditions: e.target.value}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createPatientForDoctor(newPatient)}></i>
                        </div>
                    </div>
                </li>
            {
                patients.map(patient =>
                    <li key={patient.id} className="list-group-item">
                         <PatientEditorInline key={patient.id}
                                             updatePatient={updatePatient}
                                             deletePatient={deletePatient}
                                             patient={patient}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default PatientList;