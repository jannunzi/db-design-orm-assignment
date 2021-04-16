const findAllPlaylists = () => {
    return fetch("http://localhost:8080/api/playlists")
        .then((response) => response.json())
}

export default {
    findAllPlaylists
}