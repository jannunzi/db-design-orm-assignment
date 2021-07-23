import patientService from "./patient-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const PatientEditorForm = () => {
    const [patient, setPatient] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {if(id!=="new"){
        findPatientById(id)
        }
    }, []);
    const findPatientById = (id) =>
        patientService.findPatientById(id)
            .then(patient => setPatient(patient))
    const updatePatient = (id, newPatient) =>
        patientService.updatePatient(id, newPatient)
            .then(() => history.goBack())
    const deletePatient = (id) =>
        patientService.deletePatient(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Patient Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={patient.id}/>
            <label>Firstname</label>
            <input
                className="form-control margin-bottom-10px"
                value={patient.firstname}/>
                onChange={(e) => setPatient(patient => ({...patient, firstname: e.target.value}))}
            <label>Lastname</label>
            <input
                className="form-control margin-bottom-10px"
                value={patient.lastname}
                onChange={(e)=>setPatient(patient => ({...patient, lastname: e.target.value}))}/>
            <label>Username</label>
            <input
                className="form-control margin-bottom-10px"
                value={patient.username}
                onChange={(e)=>setPatient(patient => ({...patient, username: e.target.value}))}/>
            <label>Password</label>
            <input
                className="form-control margin-bottom-10px"
                value={patient.password}
                onChange={(e)=>setPatient(patient => ({...patient, password: e.target.value}))}/>
            <label>DOB</label>
            <input
                className="form-control margin-bottom-10px"
                value={patient.DOB}
                onChange={(e)=>setPatient(patient => ({...patient, DOB: e.target.value}))
                }/>
            <label>Conditions</label>
            <input
                className="form-control margin-bottom-10px"
                value={patient.conditions}
                onChange={(e)=>setPatient(patient => ({...patient, conditions: e.target.value}))
                }/>


            <br/>
            <button
                onClick={() => updatePatient(patient.id, patient)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deletePatient(patient.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default PatientEditorForm