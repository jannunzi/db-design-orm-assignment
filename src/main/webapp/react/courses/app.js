import Courses from "./courses";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div>
            <Courses/>
            <HashRouter>
                <Route path="/qwe">
                    <h1>Hi from router</h1>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
