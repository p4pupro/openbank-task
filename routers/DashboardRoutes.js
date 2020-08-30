import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RecoveryPwc } from "../views/RecoveryPwc/RecoveryPwc";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/recovery" component={RecoveryPwc} />

          <Redirect to="/recovery" />
        </Switch>
      </div>
    </>
  );
};
