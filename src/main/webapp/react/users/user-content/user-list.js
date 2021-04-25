const {Link,useHistory} = window.ReactRouterDOM;

import userService from "./user-service"
const { useState, useEffect } = React;
const UserList = () => {
    const history = useHistory()
    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
    return(
        <div>
            <h2>User List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/users/new")}>
                Add User
            </button>
            <ul className="list-group">
                {
                    users.map(user =>
                                  <li className="btn" key={user.id}>
                                      <Link className="btn btn-light btn-block" to={`/users/${user.id}`}>
                                          {user.username}
                                      </Link>
                                  </li>)
                }
            </ul>
        </div>
    )
}

export default UserList;
