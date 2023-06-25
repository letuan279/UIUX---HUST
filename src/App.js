import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Test from "./pages/Test";
import Tasks from "./pages/Tasks";
import Kanban from "./pages/Personal/Kanban";
import Calendar from "./pages/Personal/Calendar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/test" exact component={Test} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/personal/tasks" component={Tasks} />
          <Route exact path="/personal/kanban" component={Kanban} />
          <Route exact path="/personal/calendar" component={Calendar} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          {/* <Redirect from="*" to="/dashboard" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
