import authorService from "./author-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const AuthorFormEditor = () => {
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const history = useHistory()
    useEffect(() => {
        if(id !== "new") {
            findAuthorById(id)
        }
    }, []);
    const createAuthor = (author) =>
        authorService.createAuthor(author)
            .then(() => history.goBack())
    const findAuthorById = (id) =>
        authorService.findAuthorById(id)
            .then(author => setAuthor(author))
    const deleteAuthor = (id) =>
        authorService.deleteAuthor(id)
            .then(() => history.goBack())
    const updateAuthor = (id, newAuthor) =>
        authorService.updateAuthor(id, newAuthor)
            .then(() => history.goBack())
    return (
        <div>
            <h2>Author Editor</h2>
            <label>Primary Topic</label>
            <input onChange={(e) =>
                setAuthor(author =>
                    ({...author, primaryTopic: e.target.value}))}
                   value={author.primaryTopic}/><br/>
            <label>User ID</label>
            <input onChange={(e) =>
                setAuthor(author =>
                    ({...author, userId: e.target.value}))}
                   value={author.userId}/><br/>
            {/*<label>Last Name</label>*/}
            {/*<input onChange={(e) =>*/}
            {/*    setUser(user =>*/}
            {/*        ({...user, lastName: e.target.value}))}*/}
            {/*       value={user.lastName}/><br/>*/}
            {/*<label>Username</label>*/}
            {/*<input onChange={(e) =>*/}
            {/*    setUser(user =>*/}
            {/*        ({...user, username: e.target.value}))}*/}
            {/*       value={user.username}/><br/>*/}
            {/*<label>Password</label>*/}
            {/*<input onChange={(e) =>*/}
            {/*    setUser(user =>*/}
            {/*        ({...user, password: e.target.value}))}*/}
            {/*       value={user.password}/><br/>*/}
            {/*<label>Email</label>*/}
            {/*<input onChange={(e) =>*/}
            {/*    setUser(user =>*/}
            {/*        ({...user, email: e.target.value}))}*/}
            {/*       value={user.email}/><br/>*/}
            {/*<label>DOB</label>*/}
            {/*<input onChange={(e) =>*/}
            {/*    setUser(user =>*/}
            {/*        ({...user, dateOfBirth: e.target.value}))}*/}
            {/*       value={user.dateOfBirth}/><br/>*/}
            <button
                onClick={() => {
                    history.goBack()}}>
                Cancel
            </button>
            <button
                onClick={() => deleteAuthor(author.id)}>
                Delete
            </button>
            <button
                onClick={() => createAuthor(author)}>
                Create
            </button>
            <button
                onClick={() => updateAuthor(author.id, author)}>
                Save
            </button>
        </div>
    )
}

export default AuthorFormEditor
