import service from "./theater-service"

const {useEffect, useState} = React
const {useParams} = ReactRouterDOM

const TheaterEditor = () => {
    const [theater, setTheater] = useState([])
    const {tid} = useParams()
    useEffect(() => {
        service.findTheaterById(tid)
            .then((theater) => {
                setTheater(theater)
            })
    }, [])
    const updateTheaterName = () => {
        service.updateTheaterName(theater.id, theater.name)
    }
    return (
        <div>
            <h2>Theater Editor {tid}</h2>
            <label>ID</label>
            <input value={theater.id} className="form-control"/>
            <label>Name</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setTheater({...theater, name: newValue})
                }}
                value={theater.name} className="form-control"/>
            <button>Delete</button>
            <button onClick={updateTheaterName}>
                Save
            </button>
            <button>Create</button>
            <button>Cancel</button>
            {JSON.stringify(theater)}
        </div>
    )
}

export default TheaterEditor;