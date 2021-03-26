import userService from "./user-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const UserFormEditor = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }
    }, []);
    const {id} = useParams()
    const history = useHistory()
    const createUser = (user) => {
        userService.createUser(user)
            .then(user => history.push("/users"))
    }
    const findUserById = (id) =>
        userService.findUserById(id)
            .then(user => setUser(user))
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.goBack())
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                User Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={user.id}/>
            <label>First Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setUser(user => ({...user, firstName: e.target.value}))}
                value={user.firstName}/>
            <label>Last Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setUser(user => ({...user, lastName: e.target.value}))}
                value={user.lastName}/>
            <label>Username</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setUser(user => ({...user, username: e.target.value}))}
                value={user.username}/>
            <label>Password</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setUser(user => ({...user, password: e.target.value}))}
                value={user.password}/>
                
            <Link to={`/users/${id}/blogs`}
                  className="btn btn-primary btn-block"
                  style={{width: "100%"}}>
                Blogs
            </Link>

            <br/>
            <br/>
        
            <button
                onClick={() => {
                    history.push("/users")
                }}
                className="btn btn-warning btn-block margin-right-10px">Cancel</button>
            <button
                onClick={() => createUser(user)}
                className="btn btn-primary btn-block margin-right-10px">Create</button>
            <button
                onClick={() => updateUser(user.id, user)}
                className="btn btn-success btn-block margin-right-10px">Save</button>
            <button
                onClick={() => deleteUser(user.id)}
                className="btn btn-danger btn-block margin-right-10px">Delete</button>
        </div>
    )
}

export default UserFormEditor