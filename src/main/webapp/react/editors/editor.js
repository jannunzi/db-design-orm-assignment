import EditorList from "./editor-content/editor-list";
import EditorFormEditor from "./editor-content/editor-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/editors", "/"]} exact={true}>
                    <EditorList/>
                </Route>
                <Route path="/editors/:id" exact={true}>
                    <EditorFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
