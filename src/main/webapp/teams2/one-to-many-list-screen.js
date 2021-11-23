import service, {findOneToManyRecords} from "./service";
import {schema} from "./schema";
const { useState, useEffect } = React;
const {Link, useParams} = window.ReactRouterDOM;

const OneToManyListScreen = () => {

  const params = useParams();
  const oneTable = params.oneTable;
  const id = params.id;
  const manyTable = params.manyTable;

  console.log(oneTable, id, manyTable)

  const [records, setRecords] = useState([]);

  const findOneToMany = () =>
    service.findOneToManyRecords(oneTable, id, manyTable)
      .then(records => setRecords(records));
  
  const createOneToMany = () =>
      service.createOneToMany(oneTable, id, manyTable)
          .then(() => window.location.reload());

  useEffect(findOneToMany, []);

  return(
        <div className="pt-2">
          <h2 className="mb-3">
              {oneTable}'s {manyTable}
              <button onClick={createOneToMany}
                      className="btn btn-primary float-end">
                  Add {manyTable}
                  <i className="ms-2 fas fa-plus"></i>
              </button>
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

export default OneToManyListScreen;