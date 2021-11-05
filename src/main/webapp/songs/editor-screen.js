import service from "./service"
const { useState, useEffect } = React;
const {Link, useParams} = window.ReactRouterDOM;

const EditorScreen = () => {
    const params = useParams();
    const id = params.id;
    const [record, setRecord] = useState({});
    const findById = () =>
      service.findById("songs", id)
        .then(record => setRecord(record));
    useEffect(findById, []);
    return (
        <div>
            <h2>Editor</h2>
            <label>Id</label>
            <input value={record.songId}
                   className="form-control"/>
            <label>Title</label>
            <input value={record.title}
                   className="form-control"/>
            <br/>
            <button className="btn btn-warning">Cancel</button>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-success">Create</button>
        </div>
    )
}

export default EditorScreen