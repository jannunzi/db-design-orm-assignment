import userService from "./user-service"
import InlineUserEditor from "./inline-user-editor";

const { useState, useEffect } = React;
const { Link } = window.ReactRouterDOM;

const UserList = () => {
    const [newUser, setNewUser] = useState({})
    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
    {
        console.log(userService)
        userService.findAllUsers()
            .then(users => setUsers(users))
    }
    const createUser = (user) =>
        userService.createUser(user)
            .then(user => {
                setNewUser({title:''})
                setUsers(users => ([...users, user]))
            })
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(user => setUsers(users => (users.map(user => user.id === id ? newUser : user))))
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(users => setUsers(users => users.filter(user => user.id !== id)))
    return(
        <div>
            <h2>Users</h2>
            
            <Link to="/users/new" className="btn btn-primary">
                Add
            </Link>
            <br/>
            <br/>
            
            <ul className="list-group">
            {
                users.map(user =>
                    <li key={user.id} className="list-group-item">
                        <InlineUserEditor key={user._id}
                            updateUser={updateUser}
                            deleteUser={deleteUser}
                            user={user}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default UserList;