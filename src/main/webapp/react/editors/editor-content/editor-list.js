const {Link,useHistory} = window.ReactRouterDOM;

import editorService from "./editor-service"
const { useState, useEffect } = React;
const EditorList = () => {
    const history = useHistory()
    const [editors, setEditors] = useState([])
    useEffect(() => {
        findAllEditors()
    }, [])
    const findAllEditors = () =>
        editorService.findAllEditors()
            .then(editors => setEditors(editors))
    return(
        <div>
            <h2>Editor List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/editors/new")}>
                Add Editor
            </button>
            <ul className="list-group">
                {
                    editors.map(editor =>
                        <li className="btn" key={editor.id}>
                            <Link className="btn btn-light btn-block" to={`/editors/${editor.id}`}>
                                {editor.role}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default EditorList;
