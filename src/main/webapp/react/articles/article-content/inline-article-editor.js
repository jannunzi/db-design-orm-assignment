const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineArticleEditor = ({article, deleteArticle, updateArticle}) => {
    const [articleCopy, setArticleCopy] = useState(article)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={articleCopy.title}
                            onChange={(e)=>setArticleCopy(articleCopy => ({...articleCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={articleCopy.content}
                            onChange={(e)=>setArticleCopy(articleCopy => ({...articleCopy, content: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={articleCopy.bibliography}
                            onChange={(e)=>setArticleCopy(articleCopy => ({...articleCopy, bibliography: e.target.value}))}/>
                    </div>
                    {/*<div className="col-1">*/}
                    {/*    <Link to={`/articles/${articleCopy.id}/bibliography`}>*/}
                    {/*        Bibliography*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateArticle(articleCopy.id, articleCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteArticle(article.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/articles/${articleCopy.id}`}>
                            {articleCopy.title}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/articles/${articleCopy.id}`}>
                            {articleCopy.content}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/articles/${articleCopy.id}`}>
                            {articleCopy.bibliography}
                        </Link>
                    </div>
                    {/*<div className="col-1">*/}
                    {/*    <Link to={`/articles/${articleCopy.id}`}>*/}
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

export default InlineArticleEditor;