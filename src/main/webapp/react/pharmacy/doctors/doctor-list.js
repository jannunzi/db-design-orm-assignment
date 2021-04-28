import doctorService from "./doctor-service"
import DoctorEditorInline from "./inline-doctor-editor"


const { useState, useEffect } = React;
const DOCTORS_URL = "http://localhost:8080/api/doctors"


const DoctorList = () => {
 const [doctors, setDoctors] = useState([])
 const [newDoctor, setNewDoctor] = useState({})
    useEffect(() => {
        findAllDoctors()
    }, [])
    const createDoctor = (doctor) =>
            doctorService.createDoctor(doctor)
                .then(doctor => {
                    setNewDoctor(doctor)
                    setDoctors(doctors => ([...doctors, doctor]))
                })
    const updateDoctor = (id, newDoctor) =>
        doctorService.updateDoctor(id, newDoctor).then(doctor => setDoctors(doctors => (doctors.map
        (doctor => doctor.id === id? newDoctor : doctor))))
    const findAllDoctors = () =>
        doctorService.findAllDoctors()
            .then(doctors => setDoctors(doctors))
       const deleteDoctor = (id) =>
            doctorService.deleteDoctor(id)
                .then(doctors => setDoctors(doctors => doctors.filter(doctor => doctor.id !== id)))

    return(
<div>
            <h2>Doctors</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Doctor Firstname"
                                   title="Please enter a Firstname for the doctor"
                                   className="form-control" value={newDoctor.firstname}
                                   onChange={(e) => setNewDoctor(newDoctor => ({...newDoctor,
                                   firstname: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Doctor Lastname"
                                   title="Please enter a Lastname for the doctor"
                                   className="form-control" value={newDoctor.lastname}
                                   onChange={(e) => setNewDoctor(newDoctor => ({...newDoctor,
                                   lastname: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Doctor Username"
                                   title="Please enter a Username for the doctor"
                                   className="form-control" value={newDoctor.username}
                                   onChange={(e) => setNewDoctor(newDoctor => ({...newDoctor,
                                   username: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Doctor Password"
                                   title="Please enter a Password for the doctor"
                                   className="form-control" value={newDoctor.password}
                                   onChange={(e) => setNewDoctor(newDoctor => ({...newDoctor,
                                   password: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Doctor Email"
                                   title="Please enter an Email for the doctor"
                                   className="form-control" value={newDoctor.email}
                                   onChange={(e) => setNewDoctor(newDoctor => ({...newDoctor,
                                   email: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input
                                   title="Please enter a DOB for the doctor"
                                   className="form-control" value={newDoctor.DOB}
                                   onChange={(e) => setNewDoctor(newDoctor => ({...newDoctor,
                                   DOB: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Doctor Position"
                                   title="Please enter a Position for the doctor"
                                   className="form-control" value={newDoctor.position}
                                   onChange={(e) => setNewDoctor(newDoctor => ({...newDoctor,
                                   position: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Doctor Hospital"
                                   title="Please enter a Hospital for the doctor"
                                   className="form-control" value={newDoctor.hospital}
                                   onChange={(e) => setNewDoctor(newDoctor => ({...newDoctor,
                                   hospital: e.target.value}))}/>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createDoctor(newDoctor)}></i>
                        </div>
                    </div>
                </li>
            {
                doctors.map(doctor =>
                    <li key={doctor.id} className="list-group-item">
                        <DoctorEditorInline key={doctor.id}
                            updateDoctor={updateDoctor}
                            deleteDoctor={deleteDoctor}
                            doctor={doctor}/>
                    </li>)
            }
            </ul>
        </div>


    )
}

export default DoctorList;