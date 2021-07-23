const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;
const DOCTORS_URL = "http://localhost:8080/api/doctors"

const InlineDoctorEditor = ({doctor, deleteDoctor, updateDoctor}) => {
    const [doctorCopy, setDoctorCopy] = useState(doctor)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={doctorCopy.firstname}
                            onChange={(e)=>setDoctorCopy(doctorCopy => ({...doctorCopy, firstname: e
                            .target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={doctorCopy.lastname}
                            onChange={(e)=>setDoctorCopy(doctorCopy => ({...doctorCopy, lastname: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={doctorCopy.username}
                            onChange={(e)=>setDoctorCopy(doctorCopy => ({...doctorCopy, username: e
                            .target.value}))}/>
                    </div>
                    <div className="col">
                     <input
                       className="form-control"
                       value={doctorCopy.password}
                       onChange={(e)=>setDoctorCopy(doctorCopy => ({...doctorCopy, password: e
                       .target.value}))}/>
                       </div>

                    <div className="col">
                     <input
                       className="form-control"
                       value={doctorCopy.email}
                       onChange={(e)=>setDoctorCopy(doctorCopy => ({...doctorCopy, email: e
                       .target.value}))}/>
                                        </div>
      <div className="col">
                          <input
                            className="form-control"
                            value={doctorCopy.DOB}
                            onChange={(e)=>setDoctorCopy(doctorCopy => ({...doctorCopy, DOB:
                            e.target.value}))}/>
                                             </div>
                    <div className="col">
                     <input
                       className="form-control"
                       value={doctorCopy.position}
                       onChange={(e)=>setDoctorCopy(doctorCopy => ({...doctorCopy, position: e
                       .target.value}))}/>
                       </div>
                    <div className="col">
                     <input
                       className="form-control"
                       value={doctorCopy.hospital}
                       onChange={(e)=>setDoctorCopy(doctorCopy => ({...doctorCopy, hospital: e
                       .target.value}))}/>
                       </div>
                    <div className="col-1">
                        <Link to={`/doctors/${doctorCopy.id}/patients`}>
                            Patients
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateDoctor(doctorCopy.id, doctorCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteDoctor(doctor.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/doctors/${doctorCopy.id}`}>
                            {doctorCopy.firstname}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/doctors/${doctorCopy.id}`}>
                            {doctorCopy.lastname}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/doctors/${doctorCopy.id}`}>
                            {doctorCopy.username}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/doctors/${doctorCopy.id}`}>
                            {doctorCopy.password}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/doctors/${doctorCopy.id}`}>
                            {doctorCopy.email}
                        </Link>
                    </div>
                    <div className="col">
                                            <Link to={`/doctors/${doctorCopy.id}`}>
                                                {doctorCopy.DOB}
                                            </Link>
                                        </div>
                    <div className="col">
                        <Link to={`/doctors/${doctorCopy.id}`}>
                            {doctorCopy.position}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/doctors/${doctorCopy.id}`}>
                            {doctorCopy.hospital}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/doctors/${doctorCopy.id}/patients`}>
                            Patients
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>


    )
}

export default InlineDoctorEditor;