const {Link,useHistory} = window.ReactRouterDOM;

import articleService from "./article-service"
const { useState, useEffect } = React;
const ArticleList = () => {
    const history = useHistory()
    const [articles, setArticles] = useState([])
    useEffect(() => {
        findAllArticles()
    }, [])
    const findAllArticles = () =>
        articleService.findAllArticles()
            .then(articles => setArticles(articles))
    return(
        <div>
            <h2>Article List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/articles/new")}>
                Add Article
            </button>
            <ul className="list-group">
                {
                    articles.map(article =>
                        <li className="btn" key={articles.id}>
                            <Link className="btn btn-light btn-block" to={`/articles/${article.id}`}>
                                {article.title}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ArticleList;
