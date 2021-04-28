import {PrescriptionEditorInline} from "./prescription-editor-inline";
import prescriptionService, {createPrescriptionForPatient} from "./prescription-service"

const PRESCRIPTION_URL = "http://localhost:8080/api/prescriptions"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const PrescriptionList = () => {
    const [prescriptions, setPrescriptions] = useState([])
    const [newPrescription, setNewPrescription] = useState({})
    const {id} = useParams()
    useEffect(() => {
        findPrescriptionsForPatient(id)
    }, [])
    const createPrescriptionForPatient = (prescription) =>
        prescriptionService.createPrescriptionForPatient(id, prescription)
            .then(prescription => {
                setNewPrescription({diagnosis:''})
                setPrescriptions(prescriptions => ([...prescriptions, prescription]))
            })
    const updatePrescription = (id, newPrescription) =>
        prescriptionService.updatePrescription(id, newPrescription)
            .then(prescription => setPrescriptions(prescriptions => (prescriptions.map(prescription => prescription.id === id ? newPrescription : prescription))))
    const findPrescriptionsForPatient = (id) =>
        prescriptionService.findPrescriptionsForPatient(id)
            .then(prescriptions => setPrescriptions(prescriptions))
    const deletePrescription = (id) =>
        prescriptionService.deletePrescription(id)
            .then(prescriptions => setPrescriptions(prescriptions => prescriptions.filter(prescription => prescription.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Prescriptions
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <select
                                   className="form-control"
                                   value={newPrescription.medication_name}
                                   onChange={(e) => setNewPrescription(newPrescription => ({...newPrescription, medication_name: e.target.value}))}/>
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
                        </div>
                        <div className="col">
                            <input placeholder="Prescription Diagnosis"
                                title="Please enter the diagnosis for this prescription"
                                className="form-control"
                                value={newPrescription.diagnosis}
                                onChange={(e)=>SetNewPrescription(newPrescription => ({...newPrescription, diagnosis: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Prescription Dosage"
                                title="Please enter the dosage for this prescription"
                                type="number"
                                className="form-control"
                                value={newPrescription.dosage}
                                onChange={(e)=>SetNewPrescription(newPrescription => ({...newPrescription, Dosage: parseInt(e.target.value)}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createPrescriptionForPatient(newPrescription)}></i>
                        </div>
                    </div>
                </li>
            {
                prescriptions.map(prescription =>
                    <li key={prescription.id} className="list-group-item">
                        <PrescriptionEditorInline key={prescription.id}
                                             updatePrescription={updatePrescription}
                                             deletePrescription={deletePrescription}
                                             prescription={prescription}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default PrescriptionList;