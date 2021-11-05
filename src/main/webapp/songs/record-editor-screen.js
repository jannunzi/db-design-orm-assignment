import service from "./service"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const RecordEditorScreen = () => {
    const params = useParams();
    const id = params.id;
    const [record, setRecord] = useState({});
    const history = useHistory();
    const removeRecord = () =>
      service.removeRecord("songs", id)
        .then(() => history.goBack())
    const findRecordById = () =>
      service.findRecordById("songs", id)
        .then(record => setRecord(record));
    useEffect(findRecordById, []);
    return (
        <div>
            <h2>Record Editor</h2>
            <label>Id</label>
            <input value={record.songId}
                   className="form-control"/>
            <label>Title</label>
            <input value={record.title}
                   className="form-control"/>
            <br/>
            <button className="btn btn-warning">Cancel</button>
            <button onClick={removeRecord} className="btn btn-danger">Delete</button>
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-success">Create</button>
        </div>
    )
}

export default RecordEditorScreen