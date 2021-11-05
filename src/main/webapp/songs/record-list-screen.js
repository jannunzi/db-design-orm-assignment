import service from "./service";
import {schema} from "./schema";
const { useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const RecordListScreen = () => {

  const [records, setRecords] = useState([])

  const findAllRecords = () =>
    service.findAllRecords(schema.table.name)
      .then(records => setRecords(records))

  useEffect(findAllRecords, []);

  const createRecord = () =>
    service.createRecord(schema.table.name)
      .then(() => window.location.reload())

  return(
        <div>
            <h2>{schema.table.label} List</h2>
            <button onClick={createRecord} className="btn btn-primary">
                Add {schema.table.label}
            </button>
            <ul className="list-group">

              {
                records.map(record =>
                  <li className="list-group-item"
                      key={record.id}>
                    <Link to={`/edit/${record.id}`}>
                      {
                        schema.fields.map(field =>
                          <span key={field.name}>{record[field.name]}, </span>
                        )
                      }
                    </Link>
                  </li>)
              }

            </ul>
        </div>
    )
}

export default RecordListScreen;