import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Box</h1>
        </div>
        <div>
          <Link to={"/Signup"}>Signup</Link>
        </div>
        <div>
          <Link to={"/Login"}>Login</Link>
        </div>
      </div>
    );
  }
}

export default Home;
