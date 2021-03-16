import userService from "./user-service"
import InlineUserEditor from "./inline-user-editor";

const { useState, useEffect } = React;

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
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="John"
                                   title="Please enter the user's first name" className="form-control" value={newUser.title}
                                   onChange={(e) => setNewUser(newUser => ({...newUser, firstName: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Doe"
                                   title="Please enter the user's last name" className="form-control" value={newUser.title}
                                   onChange={(e) => setNewUser(newUser => ({...newUser, lastName: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="john.doe"
                                   title="Please enter the user's username" className="form-control" value={newUser.title}
                                   onChange={(e) => setNewUser(newUser => ({...newUser, username: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createUser(newUser)}></i>
                        </div>
                    </div>
                </li>
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