import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      token: ""
    };
  }

  logout = () => {
    localStorage.removeItem("token");
    this.setState(state => {
      return {
        token: ""
      }
    })
    this.props.history.push("/");
  };

  goToProfile = () => {
    this.props.history.push("/profile")
  }

  render() {
    return (
      <Container>
        <SLink to={"/"}>Home</SLink>
        <Span onClick={this.logout}>Logout</Span>
        <SLink to={"/profile"}>Profile</SLink>
        <SLink to={`/recipes/create`}>Add Recipe</SLink>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 15px 15px;
  text-align: center;
  background-color: #1E824C;
`;

const SLink = styled(Link) `
  padding: 15px 15px;
  text-decoration: none;
  color: #fff;
`;

const Span = styled.span`
padding: 15px 15px;
cursor: pointer;
  color: #fff;
`;


export default withRouter(Navbar);
