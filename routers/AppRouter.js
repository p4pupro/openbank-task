import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Task } from "../components/task/Task";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/task" component={Task} />

          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
