import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      recipe: {}
    };
  }

  componentDidMount() {
    api.recipes.getAll().then(data => {
      this.setState(state => {
        return {
          recipe: data
        };
      });
    });
  }

  render() {
    console.log(this.state);
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
