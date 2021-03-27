import GnrxTableRow from "./gnrx-table-row";

const {useState, useEffect} = React;
const {Link, useParams} = window.ReactRouterDOM;
const GnrxTable = (
    {
        dataBaseURL = "http://localhost:8080/api",
        displayFields = [
            "firstName", "lastName"
        ]
    }) => {
    const [records, setRecords] = useState([]);
    const {id, table1} = useParams();
    useEffect(() => {
        findAllRecords()
            .then((records) => {setRecords(records)})
    }, [id])
    const findAllRecords = () => {
        return fetch(`${dataBaseURL}/${table1}`)
            .then(response => response.json())
    }
    return(
        <>
            <h1>
                {table1}
            </h1>
            <table className="table table-striped">
                <thead>
                {
                    records && records[0] &&
                    <GnrxTableRow
                        header={true}
                        displayFields={displayFields}
                        item={records[0]}/>
                }
                </thead>
                <tbody>
                {
                    records.map((item) => {
                        return(
                            <GnrxTableRow
                                table={table1}
                                displayFields={displayFields}
                                key={item.id}
                                item={item}/>
                        );
                    })
                }
                </tbody>
            </table>
        </>
    );
}

export default GnrxTable;