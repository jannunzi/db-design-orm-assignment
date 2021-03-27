import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import BlogList from "./blogs/blog-list";
import BlogFormEditor from "./blogs/blog-form-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>

                <Route path={["/users/:userId/blogs"]} exact={true}>
                    <BlogList/>
                </Route>

                <Route path={["/users/:userId/blogs/:blogId"]} exact={true}>
                    <BlogFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;
