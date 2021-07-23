import doctorService from "./doctor-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM
const DOCTORS_URL = "http://localhost:8080/api/doctors"

const DoctorFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [doctor, setDoctor] = useState({})
        useEffect(() => {
            if(id!=="new"){
            findDoctorById(id)
            }
        }, []);
    const createDoctor = (doctor) =>
        doctorService.createDoctor(doctor)
        .then(() => history.goBack())
    const findDoctorById = (id) =>
            doctorService.findDoctorById(id)
            .then(doctor => setDoctor(doctor))
    const deleteDoctor = (id) =>
            doctorService.deleteDoctor(id)
            .then(() => history.goBack())
    const updateDoctor = (id, newDoctor) =>
            doctorService.updateDoctor(id, newDoctor)
            .then(() => history.goBack())

    return (
        <div>
            <h2>Doctor Editor</h2>
            <label>Id</label>
            <input
            readOnly={true}
             value={doctor.id}/><br/>
            <label>First Name</label>
            <input onChange={(e) => setDoctor(doctor =>
            ({...doctor, firstname: e.target.value}))}
            value={doctor.firstname}/><br/>
            <label>Last Name</label>
            <input onChange={(e) => setDoctor(doctor =>
            ({...doctor, lastname: e.target.value}))}
            value={doctor.lastname}/><br/>
            <label>doctorname</label>
            <input onChange={(e) => setDoctor(doctor =>
            ({...doctor, doctorname: e.target.value}))}
            value={doctor.doctorname}/><br/>
            <label>Password</label>
            <input onChange={(e) => setDoctor(doctor =>
            ({...doctor, password: e.target.value}))}
            value={doctor.password}/><br/>
            <label>Email</label>
            <input onChange={(e) => setDoctor(doctor =>
            ({...doctor, email: e.target.value}))}
            value={doctor.email}/><br/>
            <label>DOB</label>
            <input onChange={(e) => setDoctor(doctor =>
            ({...doctor, DOB: e.target.value}))}
            value={doctor.DOB}/><br/>
            <label>Position</label>
            <input onChange={(e) => setDoctor(doctor =>
            ({...doctor, position: e.target.value}))}
            value={doctor.position}/><br/>
            <label>Hospital</label>
            <input onChange={(e) => setDoctor(doctor =>
            ({...doctor, hospital: e.target.value}))}
            value={doctor.hospital}/><br/>
            <button onClick={() => {history.goBack()}}>Cancel</button>
            <button onClick={() => deleteDoctor(id)}>Delete</button>
            <button onClick={() => updateDoctor(id, doctor)}>Save</button>
            <button onClick={()=> createDoctor(doctor)}>Create</button>
        </div>
    )
}

export default DoctorFormEditor