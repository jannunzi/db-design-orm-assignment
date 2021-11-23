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
    useEffect(findRecordById, []);
    const updateLocalCopy = (event, field) => {
      const newValue = event.target.value;
      setRecord({
        ...record,
        [field.name]: newValue
      });
    }
    const saveRecord = () =>
      service.updateRecord(schema.table.name, record)
        .then(() => history.goBack());

    return (
        <div className="pt-2">
            <h2>
                <button onClick={() => history.goBack()}
                        className="btn btn-warning me-2">
                    <i className="me-2 fas fa-arrow-left"></i>
                    Back
                </button>
                {schema.table.label} Editor11
                <button onClick={removeRecord}
                        className="btn btn-danger me-2 float-end">
                    Delete
                    <i className="ms-2 fas fa-trash"></i>
                </button>
            </h2>
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
            <hr/>
            {
                schema.relations &&
                    <div>
                        <h2>Relations</h2>
                        <div className="list-group">
                        {
                            schema.relations.map(relation =>
                                <Link className="list-group-item"
                                      to={`/${schema.table.name}/${record.id}/${relation.references}`}>
                                    {relation.label}
                                </Link>
                            )
                        }
                        </div>
                    </div>
            }
            <br/>
            <button onClick={saveRecord}
                    className="btn btn-primary me-2">
              Save
              <i className="ms-2 fas fa-save"></i>
            </button>
        </div>
    )
}

export default RecordEditorScreen