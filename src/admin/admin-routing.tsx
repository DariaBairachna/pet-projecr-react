import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminLoginPage from "./login/LoginPage";

export default function AdminRouting() {
    return (
      <Router>
          <Switch>
            <Route exact path="/admin">
              <AdminLoginPage />
            </Route>
          </Switch>
      </Router>
    );
  }