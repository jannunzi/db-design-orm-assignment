import service from "./service";
const { useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

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

const RecordListScreen = () => {

  const [records, setRecords] = useState([])

  const findAllRecords = () =>
    service.findAllRecords(schema.table.name)
      .then(records => setRecords(records))

  useEffect(findAllRecords, []);

  const createRecord = () =>
    service.createRecord("songs")
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
                          <span>{record[field.name]}, </span>
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