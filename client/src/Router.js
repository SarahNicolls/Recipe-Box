import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Profile from "./views/Profile";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/Login"} component={Login} />
          <Route exact path={"/Signup"} component={Signup} />
          <Route exact path={"/Profile"} component={Profile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
