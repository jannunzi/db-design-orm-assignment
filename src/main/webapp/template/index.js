import RecordListScreen from "./record-list-screen";
import RecordEditorScreen from "./record-editor-screen";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/list", "/"]} exact={true}>
                    <RecordListScreen/>
                </Route>
                <Route path="/edit/:id" exact={true}>
                    <RecordEditorScreen/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
