const {Link,useHistory} = window.ReactRouterDOM;

import authorService from "./author-service"
const { useState, useEffect } = React;
const AuthorList = () => {
    const history = useHistory()
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        findAllAuthors()
    }, [])
    const findAllAuthors = () =>
        authorService.findAllAuthors()
            .then(authors => setAuthors(authors))
    return(
        <div>
            <h2>Author List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/authors/new")}>
                Add Author
            </button>
            <ul className="list-group">
                {
                    authors.map(author =>
                        <li className="btn" key={author.id}>
                            <Link className="btn btn-light btn-block" to={`/authors/${author.id}`}>
                                {author.primaryTopic}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default AuthorList;
