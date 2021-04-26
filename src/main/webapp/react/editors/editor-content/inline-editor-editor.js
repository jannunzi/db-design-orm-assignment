const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineEditorEditor = ({editor, deleteEditor, updateEditor}) => {
    const [editorCopy, setEditorCopy] = useState(editor)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={editorCopy.role}
                            onChange={(e)=>setEditorCopy(editorCopy => ({...editorCopy, role: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={editorCopy.userId}
                            onChange={(e)=>setEditorCopy(editorCopy => ({...editorCopy, userId: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={editorCopy.id}
                            onChange={(e)=>setEditorCopy(editorCopy => ({...editorCopy, id: e.target.value}))}/>
                    </div>
                    {/*<div className="col-1">*/}
                    {/*    <Link to={`/users/${userCopy.id}/blogs`}>*/}
                    {/*        Blogs*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateEditor(editorCopy.id, editorCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteEditor(editor.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/editors/${editorCopy.id}`}>
                            {editorCopy.role}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/editors/${editorCopy.id}`}>
                            {editorCopy.userId}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/editors/${userCopy.id}`}>
                            {editorCopy.id}
                        </Link>
                    </div>
                    {/*<div className="col-1">*/}
                    {/*    <Link to={`/users/${userCopy.id}/blogs`}>*/}
                    {/*        Blogs*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineEditorEditor;