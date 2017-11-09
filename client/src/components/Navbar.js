import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {};
  }

  logout = () => {
    localStorage.removeItem("token");

    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Navbar);
