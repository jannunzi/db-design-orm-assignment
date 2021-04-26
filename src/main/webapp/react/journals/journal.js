import JournalList from "./journal-content/journal-list";
import JournalFormEditor from "./journal-content/journal-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/journals", "/"]} exact={true}>
                    <JournalList/>
                </Route>
                <Route path="/journals/:id" exact={true}>
                    <JournalFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
