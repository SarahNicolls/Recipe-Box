import React, { Component } from "react";

import api from "../api";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      credentials: {}
    };
  }

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        credentials: {
          ...state.credentials,
          [changeEvent.target.name]: changeEvent.target.value
        }
      };
    });
  };

  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();

    api.users
      .signup(this.state.credentials)
      .then(user => {
        this.props.history.push("/Login");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <h1>Signup for Recipe Box</h1>
        </div>
        <form onSubmit={this.onFormSubmit}>
          <input
            required
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            onChange={this.onInputChange}
          />
          <br />
          <input
            required
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            onChange={this.onInputChange}
          />
          <br />
          <input type={"submit"} />
        </form>
      </div>
    );
  }
}

export default Signup;
