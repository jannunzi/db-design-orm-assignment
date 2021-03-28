const {useState, useEffect} = React;

const GnrxFormElement = (
    {
        config,
        onChange,
        record
    }) => {
    const [recordValue, setRecordValue] = useState("")
    useEffect(() => {
        debugger
        if(record && config.name) {
            setRecordValue(record[config.name])
        }
    }, [record])
    const update = (event) => {
        const newValue = event.target.value;
        debugger
        setRecordValue(newValue);
    }
    return (
        <>
            {
                config.uiWidget.element === 'input' && config.uiWidget.type === 'text' &&
                <>
                    <label>
                        {config.label}
                    </label>
                    <input
                        value={recordValue}
                        // onChange={(event) => update(event, )}
                        onChange={update}
                        className="form-control"/>
                </>
            }
            <hr/>
            {record && config.name && record[config.name]}
            <hr/>
            {JSON.stringify(record)}
            <hr/>
            {JSON.stringify(config)}
        </>
    )
}

export default GnrxFormElement;