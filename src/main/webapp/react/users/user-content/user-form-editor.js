const UserFormEditor = () => {
    return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
            <input className="form-control"/>
            <label>First Name</label>
            <input className="form-control"/>
            <label>Last Name</label>
            <input className="form-control"/>
            <label>Username</label>
            <input className="form-control"/>
            <label>Password</label>
            <input className="form-control"/>
            <br/>
            <button className="btn btn-warning">Cancel</button>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-success">Create</button>
        </div>
    )
}

export default UserFormEditor