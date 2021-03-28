import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import BlogList from "./blogs/blog-list";
import BlogFormEditor from "./blogs/blog-form-editor";
import GnrxList from "./list/gnrx-list";
import GnrxEditor from "./gnrx-editor";
import GnrxTable from "./table/gnrx-table";
import GnrxFormElement from "./gnrx-form-element";
import GnrxFormInput from "./form/gnrx-form-input";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>

                <GnrxFormInput/>

                <Route path={["/table/:table1"]} exact={true}>
                    <GnrxTable dataBaseURL = "http://localhost:8080/api" 
                               displayFields = {["firstName", "lastName"]}/>
                </Route>
                <Route path={["/table/:table1/:pk1"]} exact={true}>
                    <GnrxEditor schema={{
                        columns: [
                            {name: "firstName", label: "First Name", type: "string", uiWidget: {element: "input", type: "text"}},
                            {name: "lastName", label: "Last Name", type: "string", uiWidget: {element: "input", type: "text"}},
                        ]
                    }}/>
                </Route>

                
                <Route path={["/list/:table1"]} exact={true}>
                    <GnrxList dataBaseURL = "http://localhost:8080/api" 
                              displayFields = {["firstName", "lastName"]}/>
                </Route>
                <Route path={["/list/:table1/:pk1"]} exact={true}>
                    <GnrxEditor/>
                </Route>
                
                {/*<Route path="/users/:id" exact={true}>*/}
                {/*    <UserFormEditor/>*/}
                {/*</Route>*/}
                
                {/*<Route path={["/users/:userId/blogs"]} exact={true}>*/}
                {/*    <BlogList/>*/}
                {/*</Route>*/}
                
                {/*<Route path={["/users/:userId/blogs/:blogId"]} exact={true}>*/}
                {/*    <BlogFormEditor/>*/}
                {/*</Route>*/}

            </HashRouter>
        </div>
    );
}

export default App;
