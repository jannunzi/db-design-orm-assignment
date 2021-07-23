import prescriptionService from "./prescription-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const PrescriptionEditorForm = () => {
    const [prescription, setPrescription] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {if(id!=="new"){
        findPrescriptionById(id)
        }
    }, []);
    const findPrescriptionById = (id) =>
        prescriptionService.findPrescriptionById(id)
            .then(prescription => setPrescription(prescription))
    const updatePrescription = (id, newPrescription) =>
        prescriptionService.updatePrescription(id, newPrescription)
            .then(() => history.goBack())
    const deletePrescription = (id) =>
        prescriptionService.deletePrescription(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Prescription Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={prescription.id}/>
            <label>Medication</label>
            <select
                className="form-control margin-bottom-10px"
                value={prescription.medication_name}
                onChange={(e)=>setPrescription(prescription => ({...prescription, medication_name: e.target.value}))}>
                <option>Adderall</option>
                <option>Allegra</option>
                <option>Ativan</option>
                <option>Celexa</option>
                <option>Dronabinol</option>
                <option>Effexor</option>
                <option>Hydrocodeine</option>
                 <option>Levora</option>
                 <option>Lexapro</option>
                 <option>Ocella</option>
                 <option>Prozac</option>
                 <option>Trazadone</option>
                 <option>Velivet</option>
                <option>Welbutrin</option>
                <option>Zoloft</option>
                <option>Zyrtec</option>
            </select>
            <label>Diagnosis</label>
            <input
                className="form-control margin-bottom-10px"
                value={prescription.diagnosis}
                onChange={(e)=>setPrescription(prescription => ({...prescription, diagnosis: e.target.value}))}/>
            <label>Dosage</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={prescription.dosage}
                onChange={(e)=>setPrescription(prescription => ({...prescription, dosage: parseInt(e.target.value)}))}/>

            <br/>
            <button
                onClick={() => updatePrescription(prescription.id, prescription)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deletePrescription(prescription.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default PrescriptionEditorForm