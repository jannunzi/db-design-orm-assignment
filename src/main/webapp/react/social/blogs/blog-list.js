import blogService from "./blog-service"

const { useState, useEffect } = React;
const { useParams, Link } = window.ReactRouterDOM;

const BlogList = () => {
    const [blogs, setBlogs] = useState([])
    const { userId } = useParams();
    useEffect(() => {
        findBlogsForUser(userId)
    }, [])
    const findBlogsForUser = (userId) => {
        blogService.findBlogsForUser(userId)
            .then(blogs => setBlogs(blogs))
    }
    return(
        <div>
            <h2>
                <Link to={`/users/${userId}`}>
                    <i className="fas fa-arrow-left"></i>
                </Link> Blogs
            </h2>
            <Link to={`/users/${userId}/blogs/new`}
                  className="btn btn-primary">
                Add
            </Link>
            <br/>
            <br/>
            <ul className="list-group">
            {
                blogs.map(blog =>
                    <li key={blog.id} className="list-group-item">
                        <Link to={`/users/${userId}/blogs/${blog.id}`}>
                        {blog.name}
                        </Link>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default BlogList;