const {useState, useEffect} = React
import playlistService from "./playlist-service"

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
            {JSON.stringify(playlists)}
        </div>
    )
}

export default PlayListList