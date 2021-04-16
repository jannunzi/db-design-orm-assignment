import playlistService from "./playlist-service"

const {useParams} = ReactRouterDOM
const {useEffect, useState} = React

const PlayListEditor = () => {
    const {pid} = useParams()
    const [playlist, setPlaylist] = useState({})
    const deletePlaylist = () => {
        playlistService.deletePlaylist(playlist.id)
    }
    useEffect(() => {
        playlistService.findPlaylistById(pid)
            .then(playlist => {
                setPlaylist(playlist)
            })
    }, [])
    return(
        <div>
            <h2>Playlist Editor {pid}</h2>
            <label>ID</label>
            <input value={playlist.id} className="form-control"/>
            <br/>
            <label>Name</label>
            <input value={playlist.name} className="form-control"/>
            <br/>
            <button onClick={deletePlaylist}>Delete</button>
            {JSON.stringify(playlist)}
        </div>
    )
}

export default PlayListEditor