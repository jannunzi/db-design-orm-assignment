import UserList from "./users/user-list";
import FormUserEditor from "./users/form-user-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <FormUserEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
