import SymptomEditorInline from "./symptom-editor-inline";
import symptomService, {createSymptomForPrescription} from "./symptom-service"

const SYMPTOMS_URL = "http://localhost:8080/api/symptoms"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const SymptomsList = () => {
    const [symptoms, setSymptoms] = useState([])
    const [newSymptom, setNewSymptom] = useState({})
    const {id} = useParams()
    useEffect(() => {
        findSymptomsForPrescription(id)
    }, [])
    const createSymptomForPrescription = (symptom) =>
        symptomService.createSymptomForPrescription(id, symptom)
            .then(symptom => {
                setNewSymptom({title:''})
                setSymptoms(symptoms => ([...symptoms, symptom]))
            })
    const updateSymptom = (id, newSymptom) =>
        symptomService.updateSymptom(id, newSymptom)
            .then(symptom => setSymptoms(symptoms => (symptoms.map(symptom => symptom.id === id ? newSymptom : symptom))))
    const findSymptomsForPrescription = (id) =>
        symptomService.findSymptomsForPrescription(id)
            .then(symptoms => setSymptoms(symptoms))
    const deleteSymptom = (id) =>
        symptomService.deleteSymptom(id)
            .then(symptoms => setSymptoms(symptoms => symptoms.filter(symptom => symptom.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Symptoms
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Symptom Title"
                                title="Please enter the title for this symptom"
                                className="form-control"
                                value={newSymptom.title}
                                onChange={(e)=>SetNewSymptom(newSymptom => ({...newSymptom, title: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <select placeholder="Symptom Medication"
                                   title="Please enter a medication for the symptom"
                                   className="form-control"
                                   value={newSymptom.medication_name}
                                   onChange={(e) => setNewSymptom(newSymptom => ({...newSymptom, medication_name: e.target.value}))}>
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
                        </div>
                        <div className="col">
                            <input placeholder="Symptom Used For"
                                title="Please enter the usage for this symptom"
                                className="form-control"
                                value={newSymptom.usedFor}
                                onChange={(e)=>SetNewSymptom(newSymptom => ({...newSymptom, usedFor: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Symptom Benefits"
                                title="Please enter the benefits for this symptom"
                                className="form-control"
                                value={newSymptom.benefits}
                                onChange={(e)=>SetNewSymptom(newSymptom => ({...newSymptom, benefits: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Symptom Side Effects"
                                title="Please enter the side effects for this symptom"
                                className="form-control"
                                value={newSymptom.sideEffects}
                                onChange={(e)=>SetNewSymptom(newSymptom => ({...newSymptom, sideEffects: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Symptom Last Used"
                                title="Please enter the last time for this symptom"
                                type="number"
                                className="form-control"
                                value={newSymptom.lastUsed}
                                onChange={(e)=>SetNewSymptom(newSymptom => ({...newSymptom, lastUsed: parseInt(e.target.value)}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createSymptomForPrescription(newSymptom)}></i>
                        </div>
                    </div>
                </li>
            {
                symptoms.map(symptom =>
                    <li key={symptom.id} className="list-group-item">
                        <SymptomEditorInline key={symptom.id}
                                             updateSymptom={updateSymptom}
                                             deleteSymptom={deleteSymptom}
                                             symptom={symptom}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default SymptomsList;