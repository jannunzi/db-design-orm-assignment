import PlayListList from "./playlists/playlist-list";
import PlayListEditor from "./playlists/playlist-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <h1>Music</h1>
            <HashRouter>
                <Route path={["/playlists", "/"]} exact={true}>
                    <PlayListList/>
                </Route>
                <Route path="/playlists/:id" exact={true}>
                    <PlayListEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
