import service from "./service"
import {schema} from "./schema";
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

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
    if(id !== 'new') {
      useEffect(findRecordById, []);
    }
    const updateLocalCopy = (event, field) => {
      const newValue = event.target.value;
      setRecord({
        ...record,
        [field.name]: newValue});
    }
    const saveRecord = () =>
      service.updateRecord(schema.table.name, record)
        .then(() => history.goBack());

    return (
        <div>
            <h2>{schema.table.label} Editor</h2>
            {
              schema.fields.map(field => (
                <div key={field.name}>
                  <label>{field.label}</label>
                  <input value={record[field.name]}
                         readOnly={field.readonly}
                         onChange={(event) =>
                           updateLocalCopy(event, field)}
                         className="form-control"/>
                </div>
              ))
            }

            <br/>
            <button onClick={() => history.goBack()} className="btn btn-warning">Cancel</button>
            <button onClick={removeRecord} className="btn btn-danger">Delete</button>
            <button onClick={saveRecord} className="btn btn-primary">Save</button>
        </div>
    )
}

export default RecordEditorScreen