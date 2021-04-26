import ArticleList from "./article-content/article-list";
import ArticleFormEditor from "./article-content/article-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/articles", "/"]} exact={true}>
                    <ArticleList/>
                </Route>
                <Route path="/articles/:id" exact={true}>
                    <ArticleFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
