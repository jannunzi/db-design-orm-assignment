import doctorList from "./doctors/doctor-list";
import doctorFormEditor from "./doctors/doctor-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/doctors", "/"]} exact={true}>
                    <doctorList/>
                </Route>
                <Route path="/doctors/:id" exact={true}>
                    <doctorFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
