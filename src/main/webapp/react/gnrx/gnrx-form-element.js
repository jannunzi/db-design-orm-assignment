const GnrxFormElement = (
    {
        config,
        onChange
    }) => {
    return (
        <>
            {
                config.uiWidget.element === 'input' && config.uiWidget.type === 'text' &&
                <>
                    <label>
                        {config.label}
                    </label>
                    <input onChange={onChange}
                           className="form-control"/>
                </>
            }
            <hr/>
            {JSON.stringify(config)}
        </>
    )
}

export default GnrxFormElement;