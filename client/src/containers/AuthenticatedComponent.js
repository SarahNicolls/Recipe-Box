import React, { Component } from "react";
import jwt from "jsonwebtoken";

class AuthenticatedComponent extends Component {
  constructor() {
    super();

    this.state = {
      authenticated: false
    };
  }

  componentWillMount() {
    let token = localStorage.getItem("token");
    if (!token) {
      return this.setState(state => {
        return {
          authenticated: false
        };
      });
    }

    token = jwt.decode(token);

    if (!token || !token.id) {
      return this.setState(state => {
        return {
          authenticated: false
        };
      });
    }
    return this.setState(state => {
      return {
        authenticated: true
      };
    });
  }

  render() {
    let { authenticated } = this.state;

    return authenticated ? (
      this.props.isAuthed
    ) : (
        this.props.notAuthed
      );
  }
}
export default AuthenticatedComponent;
