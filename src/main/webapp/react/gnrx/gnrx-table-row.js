const {Link, useParams} = window.ReactRouterDOM;

const GnrxTableRow = (
    {
        header = false,
        item,
        table,
        displayFields,
        deleteItem,
        addRecord
    }) => {
    return(
        <tr key={item.id}>
            {
                Object.keys(item).map((key) => {
                    if(displayFields.indexOf(key) >= 0) {
                        return(
                            <>
                                {
                                    header ?
                                        <th>{key} <i className="fas fa-chevron-up"></i></th> :
                                        <td>
                                            <Link to={`/${table}/${item.id}`}>
                                                {item[key]}
                                            </Link>
                                        </td>
                                }
                            </>
                        )
                    } else {
                        return null;
                    }
                })
            }
            {
                header ?
                    <th>
                        <i onClick={() => deleteItem(item)}
                           className="fas fa-plus gnrx-primary float-right"></i>
                    </th>:
                    <td className="col-1">
                        <i onClick={() => addRecord()}
                           className="fas fa-trash gnrx-danger float-right"></i>
                    </td>
            }
        </tr>
    )
}

export default GnrxTableRow;