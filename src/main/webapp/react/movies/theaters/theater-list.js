import service from "./theater-service"

const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const TheaterList = () => {
    const [theaters, setTheaters] = useState([])
    useEffect(() => {
        service.findAllTheaters()
            .then((theaters) => {
                setTheaters(theaters)
                // console.log(theaters)
            })
    }, [])
    return (
        <div>
            <h2>Theater List</h2>
            <ul className="list-group">
                {
                    theaters.map((theater) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/theaters/${theater.id}`}>
                                    {theater.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            {JSON.stringify(theaters)}
        </div>
    )
}

export default TheaterList