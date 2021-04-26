const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineAuthorEditor = ({author, deleteAuthor, updateAuthor}) => {
    const [authorCopy, setAuthorCopy] = useState(author)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={authorCopy.primaryTopic}
                            onChange={(e)=>setAuthorCopy(authorCopy => ({...authorCopy, primaryTopic: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={authorCopy.userId}
                            onChange={(e)=>setAuthorCopy(authorCopy => ({...authorCopy, userId: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={authorCopy.id}
                            onChange={(e)=>setAuthorCopy(authorCopy => ({...authorCopy, id: e.target.value}))}/>
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
                               updateAuthor(authorCopy.id, authorCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteAuthor(author.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/authors/${authorCopy.id}`}>
                            {authorCopy.primaryTopic}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/authors/${authorCopy.id}`}>
                            {authorCopy.userId}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/authors/${userCopy.id}`}>
                            {authorCopy.id}
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

export default InlineAuthorEditor;