import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DashboardMain from "../pages/DashboardMain";
import DashboardHabits from "../pages/DashboardHabits";
import DashboardGroups from "../pages/DashboardGroups";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route exact path="/dashboardMain">
        <DashboardMain />
      </Route>
      <Route exact path="/dashboardHabits">
        <DashboardHabits />
      </Route>
      <Route exact path="/dashboardGroups">
        <DashboardGroups />
      </Route>
    </Switch>
  );
};

export default Routes;
