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
        <div className="pt-2">
            <h2 className="mb-3">
                <button onClick={createRecord}
                        className="btn btn-primary float-end">
                    Add {schema.table.label}
                    <i className="ms-2 fas fa-plus"></i>
                </button>
                {schema.table.label} List
            </h2>
            <div className="list-group">
              {
                records.map(record =>
                    <Link to={`/edit/${record.id}`}
                          className="list-group-item"
                          key={record.id}>
                      {
                        schema.fields.map(field =>
                          field.references ? null :
                          <span key={field.name}>
                            {record[field.name]},
                          </span>
                        )
                      }
                    </Link>
                )
              }

            </div>
        </div>
    )
}

export default RecordListScreen;