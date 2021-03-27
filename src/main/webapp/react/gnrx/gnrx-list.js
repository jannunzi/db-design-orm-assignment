import GnrxListItem from "./gnrx-list-item";

const {useState, useEffect} = React;
const {Link, useParams} = window.ReactRouterDOM;
const GnrxList = (
    {
        dataBaseURL = "http://localhost:8080/api",
        displayFields = [
            "firstName", "lastName"
        ]
    }) => {
    const [items, setItems] = useState([]);
    const {id, table1} = useParams();
    useEffect(() => {
        findAllItems()
            .then((items) => {setItems(items)})
    }, [id])
    const findAllItems = () => {
        return fetch(`${dataBaseURL}/${table1}`)
            .then(response => response.json())
    }
    return(
        <>
            <i className="fas fa-plus float-right"></i>
            <h1>
                {table1}
            </h1>
            <ul className="list-group">
                {
                    items && items[0] &&
                    <GnrxListItem
                        header={true}
                        displayFields={displayFields}
                        item={items[0]}/>
                }
                {
                    items.map((item) => {
                        return(
                            <GnrxListItem
                                table={table1}
                                displayFields={displayFields}
                                key={item.id}
                                item={item}/>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default GnrxList;