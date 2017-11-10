import React, { Component } from "react";
import api from "../api";

class Login extends Component {
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
      .login(this.state.credentials)
      .then(user => {
        if (user.error) {
          return;
        }
        localStorage.setItem("token", user.token);
        localStorage.setItem("email", this.state.credentials.email);
        this.props.history.push(`/Profile`);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <h1>Login to access your Recipe Box</h1>
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

export default Login;
