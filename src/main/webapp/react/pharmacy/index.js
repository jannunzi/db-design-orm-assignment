import DoctorList from "./doctors/doctor-list";
import DoctorFormEditor from "./doctors/doctor-form-editor";
import PatientList from "./patients/patient-list";
import PatientFormEditor from "./patients/patient-form-editor";
import PrescriptionList from "./prescriptions/prescription-list";
import SymptomList from "./symptoms/symptoms-list";
import PrescriptionEditorForm from "./prescriptions/prescription-editor-form";
import SymptomEditorForm from "./symptoms/symptoms-editor-form";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/doctors", "/"]} exact={true}>
                    <DoctorList/>
                </Route>
                <Route path="/doctors/:id" exact={true}>
                    <DoctorFormEditor/>
                </Route>
                <Route path={["/patients/", "/"]} exact={true}>
                                    <PatientList/>
                </Route>
                <Route path ="/patients/:id" exact={true}>
                    <PatientFormEditor/>
                 </Route>
                <Route path={["/prescriptions/", "/"]} exact={true}>
                    <PrescriptionList/>
                </Route>
                <Route path="/prescriptions/:id" exact={true}>
                    <PrescriptionEditorForm/>
                </Route>
                <Route path="/symptoms/" exact={true}>
                    <SymptomList/>
                </Route>
                <Route path="/symptoms/:symptomId" exact={true}>
                    <SymptomEditorForm/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;
