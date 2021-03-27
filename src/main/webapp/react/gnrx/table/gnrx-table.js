import GnrxTableRow from "./gnrx-table-row";

const {useState, useEffect} = React;
const {Link, useParams} = window.ReactRouterDOM;
const GnrxTable = (
    {
        // TODO: if JavaScript is downloaded from same server, then we don't need localhost:8080
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
    const createRecord = () => {
        let newRecord = {};
        // TODO: handle column datatypes. Right now there are all strings
        // TODO: maybe get schema from server
        displayFields.forEach((column) => {
            newRecord[column] = `${column} ${records.length+1}`
        })
        return fetch(`${dataBaseURL}/${table1}`, {
            method: "POST",
            body: JSON.stringify(newRecord),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then((newRecord) => {
                setRecords((prevRecords) => {
                    return([
                        ...prevRecords,
                        newRecord
                    ])
                })
            })
    }
    const findAllRecords = () => {
        return fetch(`${dataBaseURL}/${table1}`)
            .then(response => response.json())
    }
    const deleteRecord = (id) => {
        return fetch(`${dataBaseURL}/${table1}/${id}`, {
            method: 'DELETE'
        })
            .then(status => {
                setRecords((prevRecords) => {
                    return(prevRecords.filter((prevRecord) => {
                            return (prevRecord.id !== id)
                        }))
                })
            })
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
                        createRecord={createRecord}
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
                                linkToPrefix={`/table/${table1}`}
                                deleteRecord={deleteRecord}
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