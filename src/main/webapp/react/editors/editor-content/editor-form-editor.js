import editorService from "./editor-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const EditorFormEditor = () => {
    const {id} = useParams()
    const [editor, setEditor] = useState({})
    const history = useHistory()
    useEffect(() => {
        if(id !== "new") {
            findEditorById(id)
        }
    }, []);
    const createEditor = (editor) =>
        editorService.createEditor(editor)
            .then(() => history.goBack())
    const findEditorById = (id) =>
        editorService.findEditorById(id)
            .then(editor => setEditor(editor))
    const deleteEditor = (id) =>
        editorService.deleteEditor(id)
            .then(() => history.goBack())
    const updateEditor = (id, newEditor) =>
        editorService.updateEditor(id, newEditor)
            .then(() => history.goBack())
    return (
        <div>
            <h2>Editor Editor</h2>
            <label>Role</label>
            <input onChange={(e) =>
                setEditor(editor =>
                    ({...editor, role: e.target.value}))}
                   value={editor.role}/><br/>
            <label>User ID</label>
            <input onChange={(e) =>
                setEditor(editor =>
                    ({...editor, userId: e.target.value}))}
                   value={editor.userId}/><br/>
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
                onClick={() => deleteEditor(editor.id)}>
                Delete
            </button>
            <button
                onClick={() => createEditor(editor)}>
                Create
            </button>
            <button
                onClick={() => updateEditor(editor.id, editor)}>
                Save
            </button>
        </div>
    )
}

export default EditorFormEditor
