import AuthorList from "./author-content/author-list";
import AuthorFormEditor from "./author-content/author-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/authors", "/"]} exact={true}>
                    <AuthorList/>
                </Route>
                <Route path="/authors/:id" exact={true}>
                    <AuthorFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
