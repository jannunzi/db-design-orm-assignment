import articleService from "./article-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const ArticleFormEditor = () => {
    const {id} = useParams()
    const [article, setArticle] = useState({})
    const history = useHistory()
    useEffect(() => {
        if(id !== "new") {
            findArticleById(id)
        }
    }, []);
    const createArticle = (article) =>
        articleService.createArticle(article)
            .then(() => history.goBack())
    const findArticleById = (id) =>
        articleService.findArticleById(id)
            .then(article => setArticle(article))
    const deleteArticle = (id) =>
        articleService.deleteArticle(id)
            .then(() => history.goBack())
    const updateArticle = (id, newArticle) =>
        articleService.updateArticle(id, newArticle)
            .then(() => history.goBack())
    return (
        <div>
            <h2>Article Editor</h2>
            <label>Title</label>
            <input onChange={(e) =>
                setArticle(article =>
                    ({...article, title: e.target.value}))}
                   value={article.title}/><br/>
            <label>Content</label>
            <input onChange={(e) =>
                setArticle(article =>
                    ({...article, content: e.target.value}))}
                   value={article.content}/><br/>
            <label>Bibliography</label>
            <input onChange={(e) =>
                setArticle(article =>
                    ({...article, bibliography: e.target.value}))}
                   value={article.bibliography}/><br/>
            <label>Author</label>
            <input onChange={(e) =>
                setArticle(article =>
                    ({...article, author: e.target.value}))}
                   value={article.author}/><br/>
            <label>Editor</label>
            <input onChange={(e) =>
                setArticle(article =>
                    ({...article, editor: e.target.value}))}
                   value={article.editor}/><br/>
            <label>Journal</label>
            <input onChange={(e) =>
                setArticle(article =>
                    ({...article, journal: e.target.value}))}
                   value={article.journal}/><br/>
            <button
                onClick={() => {
                    history.goBack()}}>
                Cancel
            </button>
            <button
                onClick={() => deleteArticle(article.id)}>
                Delete
            </button>
            <button
                onClick={() => createArticle(article)}>
                Create
            </button>
            <button
                onClick={() => updateArticle(article.id, article)}>
                Save
            </button>
        </div>
    )
}

export default ArticleFormEditor
