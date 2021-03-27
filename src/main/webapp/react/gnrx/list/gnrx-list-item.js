const {Link, useParams} = window.ReactRouterDOM;

const GnrxListItem = (
    {
        header = false,
        item,
        table,
        displayFields,
        deleteItem
    }) => {
    return(
        <li key={item.id} className="list-group-item">
            <div className="row">
                {
                    Object.keys(item).map((key) => {
                        if(displayFields.indexOf(key) >= 0) {
                            return(
                                <div key={key} className="col">
                                    {
                                        header ?
                                            <>
                                                <th>{key} <i className="fas fa-chevron-up"></i></th>
                                            </> :
                                            <Link to={`/${table}/${item.id}`}>
                                                {item[key]}
                                            </Link>
                                    }
                                </div>
                            )
                        } else {
                            return null;
                        }
                    })
                }
                <div className="col-1">
                    <i onClick={() => deleteItem(item)}
                       className="fas fa-trash gnrx-danger"></i>
                </div>
            </div>
        </li>
    )
}

export default GnrxListItem;