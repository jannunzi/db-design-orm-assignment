import journalService from "./journal-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const JournalFormEditor = () => {
        const {id} = useParams()
        const [journal, setJournal] = useState({})
        const history = useHistory()
        useEffect(() => {
                if(id !== "new") {
                        findJournalById(id)
                }
        }, []);
        const createJournal = (journal) =>
            journalService.createJournal(journal)
                .then(() => history.goBack())
        const findJournalById = (id) =>
            journalService.findJournalById(id)
                .then(journal => setJournal(journal))
        const deleteJournal = (id) =>
            journalService.deleteJournal(id)
                .then(() => history.goBack())
        const updateJournal = (id, newJournal) =>
            journalService.updateJournal(id, newJournal)
                .then(() => history.goBack())
        return (
            <div>
                    <h2>Journal Editor</h2>
                    <label>Name</label>
                    <input onChange={(e) =>
                        setJournal(journal =>
                                    ({...journal, name: e.target.value}))}
                           value={journal.name}/><br/>
                    <label>Topic</label>
                    <input onChange={(e) =>
                        setJournal(journal =>
                                    ({...journal, topic: e.target.value}))}
                           value={journal.topic}/><br/>
                    <label>Release Date</label>
                    <input onChange={(e) =>
                        setJournal(journal =>
                                    ({...journal, releaseDate: e.target.value}))}
                           value={journal.releaseDate}/><br/>
                    <label>Volume</label>
                    <input onChange={(e) =>
                        setJournal(journal =>
                                    ({...journal, volume: e.target.value}))}
                           value={journal.volume}/><br/>
                    <button
                        onClick={() => {
                                history.goBack()}}>
                            Cancel
                    </button>
                    <button
                        onClick={() => deleteJournal(journal.id)}>
                            Delete
                    </button>
                    <button
                        onClick={() => createJournal(journal)}>
                            Create
                    </button>
                    <button
                        onClick={() => updateJournal(journal.id, journal)}>
                            Save
                    </button>
            </div>
        )
}

export default JournalFormEditor
