import service from "./service"
const { useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const RecordListScreen = () => {

  const [list, setList] = useState([])

  const findAll = () =>
    service.findAllRecords("songs")
      .then(list => setList(list))

  useEffect(findAll, []);

  return(
        <div>
            <h2>Record List</h2>
            <button className="btn btn-primary">
                Add Record
            </button>
            <ul className="list-group">

              {
                list.map(item =>
                  <li className="list-group-item"
                      key={item.songId}>
                    <Link to={`/edit/${item.songId}`}>
                      {item.songId},
                      {item.title}
                    </Link>
                  </li>)
              }

            </ul>
        </div>
    )
}

export default RecordListScreen;