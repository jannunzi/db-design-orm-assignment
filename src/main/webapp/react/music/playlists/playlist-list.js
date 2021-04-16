import playlistService from "./playlist-service"

const {useState, useEffect} = React
const {Link} = ReactRouterDOM

const PlayListList = () => {
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        playlistService.findAllPlaylists()
            .then((playlists) => {
                setPlaylists(playlists)
            })
    }, [])
    return(
        <div>
            <h2>Playlists</h2>
            <ul>
                {
                    playlists.map((playlist) => {
                        return(
                            <li>
                                <Link to={`/playlists/${playlist.id}`}>
                                {playlist.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            {JSON.stringify(playlists)}
        </div>
    )
}

export default PlayListList