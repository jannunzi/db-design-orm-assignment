import RecordListScreen from "./record-list-screen";
import RecordEditorScreen from "./record-editor-screen";
import OneToManyListScreen from "./one-to-many-list-screen";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/list", "/", "/:table/list"]} exact={true}>
                    <RecordListScreen/>
                </Route>
                <Route path={["/edit/:id", "/:table/edit/:id"]} exact={true}>
                    <RecordEditorScreen/>
                </Route>
                <Route path={["/:oneTable/:id/:manyTable"]} exact={true}>
                    <OneToManyListScreen/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
