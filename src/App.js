import "./App.css";
import { Link, Switch, Router, Route, useLocation } from "react-router-dom";
import { LayoutCustom } from "./components/common/LayoutCustom";
import { StudentListing } from "./components/student/StudentListing";
import CourseListing from "./components/course/CourseListing";
import DepartmentListing from "./components/department/DepartmentListing";
import SubjectListing from "./components/subject/SubjectListing";
import Home from "./components/common/Home";
import { createBrowserHistory } from "history";
function App() {
  const history = createBrowserHistory();
  return (
      <LayoutCustom>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/student" component={StudentListing} />
          <Route exact path="/course" component={CourseListing} />
          <Route exact path="/department" component={DepartmentListing} />
          <Route exact path="/subject" component={SubjectListing} />
        </Switch>
      </LayoutCustom>
  );
}

export default App;
