
const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const GnrxEditor = (
    {
        dataBaseURL = "http://localhost:8080/api",
    }) => {
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
            <h1>{table1}</h1>
            {JSON.stringify(record)}
        </>
    )
}

export default GnrxEditor;