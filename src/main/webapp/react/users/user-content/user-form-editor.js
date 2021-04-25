import userService from "./user-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const UserFormEditor = () => {
        const {id} = useParams()
        const [user, setUser] = useState({})
        const history = useHistory()
        useEffect(() => {
                if(id !== "new") {
                        findUserById(id)
                }
        }, []);
        const createUser = (user) =>
            userService.createUser(user)
                .then(() => history.goBack())
        const findUserById = (id) =>
            userService.findUserById(id)
                .then(user => setUser(user))
        const deleteUser = (id) =>
            userService.deleteUser(id)
                .then(() => history.goBack())
        const updateUser = (id, newUser) =>
            userService.updateUser(id, newUser)
                .then(() => history.goBack())
        return (
            <div>
                    <h2>User Editor</h2>
                    <label>First Name</label>
                    <input onChange={(e) =>
                        setUser(user =>
                                    ({...user, firstName: e.target.value}))}
                           value={user.firstName}/><br/>
                    <label>Last Name</label>
                    <input onChange={(e) =>
                        setUser(user =>
                                    ({...user, lastName: e.target.value}))}
                           value={user.lastName}/><br/>
                    <label>Username</label>
                    <input onChange={(e) =>
                        setUser(user =>
                                    ({...user, username: e.target.value}))}
                           value={user.username}/><br/>
                    <label>Password</label>
                    <input onChange={(e) =>
                        setUser(user =>
                                    ({...user, password: e.target.value}))}
                           value={user.password}/><br/>
                    <label>Email</label>
                    <input onChange={(e) =>
                        setUser(user =>
                                    ({...user, email: e.target.value}))}
                           value={user.email}/><br/>
                    <label>DOB</label>
                    <input onChange={(e) =>
                        setUser(user =>
                                    ({...user, dateOfBirth: e.target.value}))}
                           value={user.dateOfBirth}/><br/>
                    <button
                        onClick={() => {
                                history.goBack()}}>
                            Cancel
                    </button>
                    <button
                        onClick={() => deleteUser(user.id)}>
                            Delete
                    </button>
                    <button
                        onClick={() => createUser(user)}>
                            Create
                    </button>
                    <button
                        onClick={() => updateUser(user.id, user)}>
                            Save
                    </button>
            </div>
        )
}

export default UserFormEditor
