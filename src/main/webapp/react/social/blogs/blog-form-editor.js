import blogService from "./blog-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const BlogFormEditor = () => {
    const [blog, setBlog] = useState({})
    const {userId, blogId} = useParams()
    useEffect(() => {
        if(userId !== 'new') {
            findBlogById(blogId)
        }
    }, []);
    const {id} = useParams()
    const history = useHistory()
    const createBlogForUser = (userId, blog) => {
        blogService.createBlogForUser(userId, blog)
            .then(blog => history.goBack())
    }
    const findBlogById = (id) => {
        blogService.findBlogById(id)
            .then(blog => setBlog(blog))
    }
    const updateBlog = (id, newBlog) => {
        blogService.updateBlog(id, newBlog)
            .then(() => history.goBack())
    }
    const deleteBlog = (id) => {
        blogService.deleteBlog(id)
            .then(() => history.goBack())
    }
    
    return (
        <div>
            <h2>
                Blog Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={blog.id}/>
            <label>Blog Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setBlog(blog => ({...blog, name: e.target.value}))}
                value={blog.name}/>
            <label>Topic</label>
            <select
                className="form-control margin-bottom-10px"
                onChange={(e) => setBlog(blog => ({...blog, topic: e.target.value}))}
                value={blog.topic || "CARS"}>
                <option value="CARS">Cars</option>
                <option value="SPACE">Space</option>
            </select>
            <button
                onClick={() => {history.goBack()}}
                className="btn btn-warning btn-block margin-right-10px">Cancel</button>
            <button
                onClick={() => {createBlogForUser(userId, blog)}}
                className="btn btn-primary btn-block margin-right-10px">Create</button>
            <button
                onClick={() => {updateBlog(blog.id, blog)}}
                className="btn btn-success btn-block margin-right-10px">Save</button>
            <button
                onClick={() => {deleteBlog(blog.id)}}
                className="btn btn-danger btn-block margin-right-10px">Delete</button>
        </div>
    )
}

export default BlogFormEditor