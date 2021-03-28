import GnrxFormElement from "./gnrx-form-element";

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const GnrxEditor = (
    {
        schema,
        dataBaseURL = "http://localhost:8080/api",
    }) => {
    const history = useHistory();
    const [record, setRecord] = useState();
    const {table1, pk1} = useParams();
    useEffect(() => {
        findRecordById(pk1)
            .then((record) => {
                setRecord(record);
            })
    }, [pk1]);
    const findRecordById = (id) => {
        return fetch(`${dataBaseURL}/${table1}/${pk1}`)
            .then(response => response.json())
    }
    return(
        <>
            <h1>
                <i  onClick={() => history.goBack()}
                    className="fas fa-times float-right"></i>
                {table1}
            </h1>
            <ul className="list-group">
                {
                    schema.columns.map((column) => {
                        return(
                            <li className="list-group-item">
                                <GnrxFormElement
                                    onChange={(event) => {

                                    }}
                                    record={record}
                                    config={column}/>
                            </li>
                        )
                    })
                }
            </ul>
            {JSON.stringify(schema)}
            {JSON.stringify(record)}
        </>
    )
}

export default GnrxEditor;