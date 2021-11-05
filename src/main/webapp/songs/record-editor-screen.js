import service from "./service"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const schema = {
  table: {
    name: 'songs',
    label: 'Song'
  },
  fields: [
    {name: 'id', label: 'Song ID'},
    {name: 'title', label: 'Song Title'},
  ]
};

const RecordEditorScreen = () => {
    const params = useParams();
    const id = params.id;
    const [record, setRecord] = useState({});
    const history = useHistory();
    const removeRecord = () =>
      service.removeRecord(schema.table.name, id)
        .then(() => history.goBack())
    const findRecordById = () =>
      service.findRecordById(schema.table.name, id)
        .then(record => setRecord(record));
    useEffect(findRecordById, []);
    return (
        <div>
            <h2>{schema.table.label} Editor</h2>
            <label>Id</label>
            <input value={record.id}
                   className="form-control"/>
            <label>Title</label>
            <input value={record.title}
                   className="form-control"/>
          {
            schema.fields.map(field => (
              <>
                <label>{field.label}</label>
                <input value={record[field.name]} className="form-control"/>
              </>
            ))
          }

            <br/>
            <button className="btn btn-warning">Cancel</button>
            <button onClick={removeRecord} className="btn btn-danger">Delete</button>
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-success">Create</button>
        </div>
    )
}

export default RecordEditorScreen