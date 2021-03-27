const {Link, useParams} = window.ReactRouterDOM;

const GnrxTableRow = (
    {
        header = false,
        item,
        table,
        displayFields,
        deleteRecord,
        createRecord,
        linkToPrefix
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
                                            <Link to={`${linkToPrefix}/${item.id}`}>
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
                        <i onClick={createRecord}
                           className="fas fa-plus gnrx-primary float-right"></i>
                    </th>:
                    <td>
                        <i onClick={() => deleteRecord(item.id)}
                           className="fas fa-trash gnrx-danger float-right"></i>
                    </td>
            }
        </tr>
    )
}

export default GnrxTableRow;