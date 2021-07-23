const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlinePatientEditor = ({patient, deletePatient, updatePatient}) => {
    const [patientCopy, setPatientCopy] = useState(patient)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={patientCopy.firstname}
                            onChange={(e)=>setPatientCopy(patientCopy => ({...patientCopy, firstname: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={patientCopy.lastname}
                            onChange={(e)=>setPatientCopy(patientCopy => ({...patientCopy, lastname:
                            e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={patientCopy.username}
                            onChange={(e)=>setPatientCopy(patientCopy => ({...patientCopy, username: e.target.value}))}/>

                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={patientCopy.password}
                            onChange={(e)=>setPatientCopy(patientCopy => ({...patientCopy, password: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={patientCopy.email}
                            onChange={(e)=>setPatientCopy(patientCopy => ({...patientCopy, email: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={patientCopy.DOB}
                            onChange={(e)=>setPatientCopy(patientCopy => ({...patientCopy, DOB:
                            e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={patientCopy.conditions}
                            onChange={(e)=>setPatientCopy(patientCopy => ({...patientCopy, conditions: e.target.value}))}/>
                    </div>
                     <div className="col-1">
                        <Link to={`/patients/${patientCopy.id}/prescriptions`}>
                            Prescriptions
                        </Link>
                    </div>


                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updatePatient(patientCopy.id, patientCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deletePatient(patient.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/patients/${patientCopy.id}`}>
                            {patientCopy.firstname}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/patients/${patientCopy.id}`}>
                            {patientCopy.lastname}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/patients/${patientCopy.id}`}>
                            {patientCopy.username}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/patients/${patientCopy.id}`}>
                            {patientCopy.password}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/patients/${patientCopy.id}`}>
                            {patientCopy.email}
                        </Link>
                    </div>
                    <div className="col">
                             <Link to={`/patients/${patientCopy.id}`}>
                                 {patientCopy.DOB}
                             </Link>
                         </div>
                    <div className="col">
                        <Link to={`/patients/${patientCopy.id}`}>
                            {patientCopy.conditions}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/patients/${patientCopy.id}/prescriptions`}>
                            Prescriptions
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

export default InlinePatientEditor;