const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const SymptomEditorInline = ({symptom, deleteSymptom, updateSymptom}) => {
    const [symptomCopy, setSymptomCopy] = useState(symptom)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                <input
                                className="form-control margin-bottom-10px"
                                value={symptom.title}
                                onChange={(e)=>setSymptom(symptom => ({...symptom, title: e.target.value}))}/>

                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={sectionCopy.medication_name}
                            onChange={(e)=>setSectionCopy(sectionCopy => ({...sectionCopy,
                            medication_name: e.target.value}))}>
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
                        <input
                            className="form-control"
                            value={symptomCopy.usedFor}
                            onChange={(e)=>setSymptomCopy(symptomCopy => ({...symptomCopy, usedFor: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={symptomCopy.benefits}
                            onChange={(e)=>setSymptomCopy(symptomCopy => ({...symptomCopy, benefits: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={symptomCopy.sideEffects}
                            onChange={(e)=>setSymptomCopy(symptomCopy => ({...symptomCopy, sideEffects: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={symptomCopy.lastUsed}
                            onChange={(e)=>setSymptomCopy(symptomCopy => ({...symptomCopy, Dosage:
                            parseInt(e.target.value)}))}/>
                    </div>

                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateSymptom(symptomCopy.id, symptomCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteSymptom(symptom.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/symptoms/${symptomCopy.id}`}>
                            {symptomCopy.title}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/symptoms/${symptomCopy.id}`}>
                            {symptomCopy.medication_name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/symptoms/${symptomCopy.id}`}>
                            {symptomCopy.usedFor}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/symptoms/${symptomCopy.id}`}>
                            {symptomCopy.benefits}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/symptoms/${symptomCopy.id}`}>
                            {symptomCopy.sideEffects}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/symptoms/${symptomCopy.id}`}>
                            {symptomCopy.lastUsed}
                        </Link>
                    </div>

                    <div className="col-1">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default SymptomEditorInline;