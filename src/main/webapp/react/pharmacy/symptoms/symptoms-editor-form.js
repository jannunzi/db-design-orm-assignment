import symptomService from "./symptoms-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const SymptomEditorForm = () => {
    const [symptom, setSymptom] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
    if(id!=="new"){
        findSymptomById(id)
        }
    }, []);
    const findSymptomById = (id) =>
        symptomService.findSymptomById(id)
            .then(symptom => setSymptom(symptom))
    const updateSymptom = (id, newSymptom) =>
        symptomService.updateSymptom(id, newSymptom)
            .then(() => history.goBack())
    const deleteSymptom = (id) =>
        symptomService.deleteSymptom(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Symptom Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={symptom.id}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                value={symptom.title}
                onChange={(e)=>setSymptom(symptom => ({...symptom, title: e.target.value}))}/>

            <label>Medication</label>
            <select
                className="form-control margin-bottom-10px"
                value={symptom.medication_name}
                onChange={(e)=>setSymptom(symptom => ({...symptom, medication_name: e.target.value}))}>
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
            <label>Used For</label>
            <input
                className="form-control margin-bottom-10px"
                value={symptom.usedFor}
                onChange={(e)=>setSymptom(symptom => ({...symptom, usedFor: e.target.value}))}/>
            <label>Benefits</label>
                            <input
                                className="form-control margin-bottom-10px"
                                value={symptom.benefits}
                                onChange={(e)=>setSymptom(symptom => ({...symptom, benefits: e.target.value}))}/>

            <label>Side Effects</label>
                        <input
                            className="form-control margin-bottom-10px"
                            value={symptom.sideEffects}
                            onChange={(e)=>setSymptom(symptom => ({...symptom, sideEffects: e.target.value}))}/>
            <label>Last Used</label>
            <input type="number"
                className="form-control margin-bottom-10px"
                value={symptom.lastUsed}
                onChange={(e)=>setSymptom(symptom=> ({...symptom, lastUsed: parseInt(e.target.value)
                }))}/>
            <br/>
            <button
                onClick={() => updateSymptom(symptom.id, symptom)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteSymptom(symptom.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default SymptomEditorForm