const findAllPlaylists = () => {
    return fetch("http://localhost:8080/api/playlists")
        .then((response) => response.json())
}

const findPlaylistById = (id) => {
    return fetch(`http://localhost:8080/api/playlists/${id}`)
        .then(response => response.json())
}

const deletePlaylist = (id) => {
    return fetch(`http://localhost:8080/api/playlists/${id}/delete`)
        .then(() => {})
}

export default {
    findAllPlaylists,
    findPlaylistById,
    deletePlaylist
}