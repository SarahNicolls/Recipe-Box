import React, { Component } from "react";
import styled from 'styled-components';
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
      <Container>
        <Measure>
          <Title>Login to access your Recipe Box</Title>
          <Form onSubmit={this.onFormSubmit}>
            <FormItem>
              <Input
                required
                type={"email"}
                name={"email"}
                placeholder={"Email"}
                onChange={this.onInputChange}
              />
            </FormItem>
            <FormItem>
              <Input
                required
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                onChange={this.onInputChange}
              />
            </FormItem>
            <FormItem>
              <Input type={"submit"} />
            </FormItem>
          </Form>
        </Measure>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const Measure = styled.div.attrs({ className: "measure" }) `
  background-color: #1E824C;
  padding: 50px 25px;
`;

const Title = styled.h1.attrs({
  className: "f3"
}) `
  color: #fff;
  text-align: center;
  font-weight: 400;
`;

const Form = styled.form.attrs({
  className: "pa4 black-80 measure"
}) `
  
  justify-content: center;
`;

const FormItem = styled.div`
  padding-top: 15px;
`;

const Input = styled.input.attrs({
  className: "input-reset ba b--black-20 pa2 mb2 db w-100"
}) ``;

const TextArea = styled.textarea.attrs({
  rows: 8,
  className: "input-reset ba b--black-20 pa2 mb2 db w-100"
}) ``;

const Label = styled.label.attrs({
  className: "f6 b db mb2"
}) `

`;


export default Login;
