import React, { Component } from 'react';
import styled from 'styled-components';
import jwt from 'jsonwebtoken';
import api from '../api';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strMeal: "",
      strCategory: "",
      strMealThumb: "",
      strInstructions: "",
      idMeal: "",
      strArea: "",
      dateModified: "",
      strSource: "",
      strYoutube: ""
    }
  }

  onInputChange = (e) => {
    e.persist();
    this.setState(state => {
      return {
        ...this.state,
        [e.target.name]: e.target.value
      };
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    let userId = jwt.decode(localStorage.getItem("token")).id;
    api.recipes.create(this.state).then(recipe => {
      api.users.addRecipeToUser(userId, recipe.id).then(() => {
        this.props.history.push("/");
      })
    })
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <div className={"measure"}>
          <FormItem>
            <Label>Recipe Name</Label>
            <Input
              name={"strMeal"}
              value={this.state.strMeal}
              onChange={this.onInputChange} />
          </FormItem>
          <FormItem>
            <Label>Category</Label>
            <Input
              name={"strCategory"}
              value={this.state.strCategory}
              onChange={this.onInputChange} />
          </FormItem>
          <FormItem>
            <Label>Thumbnail Image</Label>
            <Input
              name={"strMealThumb"}
              value={this.state.strMealThumb}
              onChange={this.onInputChange} />
          </FormItem>
          <FormItem>
            <Label>Instructions</Label>
            <TextArea name={"strInstructions"}
              value={this.state.strInstructions}
              onChange={this.onInputChange} />
          </FormItem>
          <Input type={"submit"} />
        </div>
      </Form>
    );
  }
}

const Form = styled.form.attrs({
  className: "pa4 black-80"
}) ``;

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

export default Create;