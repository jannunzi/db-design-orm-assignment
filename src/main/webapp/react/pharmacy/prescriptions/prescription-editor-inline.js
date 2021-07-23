const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const PrescriptionEditorInline = ({prescription, deletePrescription, updatePrescription}) => {
    const [prescriptionCopy, setPrescriptionCopy] = useState(prescription)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <select
                            className="form-control"
                            value={prescriptionCopy.medication_name}
                            onChange={(e)=>setPrescriptionCopy(prescriptionCopy => ({...prescriptionCopy, medication_name: e.target.value}))}>
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
                            value={prescriptionCopy.diagnosis}
                            onChange={(e)=>setPrescriptionCopy(prescriptionCopy => ({...prescriptionCopy, diagnosis: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={prescriptionCopy.dosage}
                            onChange={(e)=>setPrescriptionCopy(prescriptionCopy => ({...prescriptionCopy, Dosage: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/prescriptions/${prescriptionCopy.id}/symptoms`}>
                            Symptoms
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updatePrescription(prescriptionCopy.id, prescriptionCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deletePrescription(prescription.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/prescriptions/${prescriptionCopy.id}`}>
                            {prescriptionCopy.medication_name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/prescriptions/${prescriptionCopy.id}`}>
                            {prescriptionCopy.diagnosis}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/prescriptions/${prescriptionCopy.id}`}>
                            {prescriptionCopy.dosage}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/prescriptions/${prescriptionCopy.id}/symptoms`}>
                            Symptoms
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

export default PrescriptionEditorInline;