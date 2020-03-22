import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import LoginPage from "./auth/login/Login";
import RegisterPage from "./auth/register/Register";

export default function AppRouting() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
          </Switch>
      </Router>
    );
  }