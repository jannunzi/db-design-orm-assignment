import TheaterList from "./theaters/theater-list";
import TheaterEditor from "./theaters/theater-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    return (
        <div className="container-fluid">
            <h1>Movie Database</h1>
            <HashRouter>
                <Route path={["/theaters", "/"]} exact={true}>
                    <TheaterList/>
                </Route>
                <Route path="/theaters/:tid" exact={true}>
                    <TheaterEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
