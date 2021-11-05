import UserList from "./list-screen";
import UserFormEditor from "./editor-screen";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/list", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/edit/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
