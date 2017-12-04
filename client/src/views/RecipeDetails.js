import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import api from "../api";
import AuthenticatedComponent from '../containers/AuthenticatedComponent'
import Navbar from '../components/Navbar';

class RecipeDetails extends Component {
  constructor() {
    super();

    this.state = {
      recipe: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;

    api.recipes.getById(id).then(recipe => {
      this.setState(state => {
        return {
          recipe
        };
      });
    });
  }

  saveRecipe = (id) => {
    let recipeId = this.props.match.params.id;
    let userId = jwt.decode(localStorage.getItem("token")).id;
    api.users.addRecipeToUser(userId, recipeId).then(() => {
      this.props.history.push("/profile");
    })
  }

  render() {
    let { recipe } = this.state;

    return (
      <div>
        <AuthenticatedComponent
          isAuthed={<Navbar />}
          notAuthed={
            <Link to={"/"}>Home</Link>
          }
        />
        <Container>
          <Column>
            <Title>
              {recipe.strMeal}
            </Title>
            <SubTitle>
              {recipe.strCategory} {recipe.strArea}
            </SubTitle>
            <P>{recipe.strInstructions}</P>
            <SLink onClick={this.saveRecipe}>Save Recipe</SLink>
          </Column>
          <Column>
            <Image src={recipe.strMealThumb} alt={recipe.strMeal} />
          </Column>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  `;

const Column = styled.div.attrs({
  className: ""
}) `
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1.attrs({ className: "f2" }) `
  text-align: center;
`;

const SubTitle = styled.h2.attrs({ className: "f3" }) `
  text-align: center;
`;

const P = styled.p.attrs({
  className: "measure f5"
}) `
  display: flex;
  justify-content: center;
`;

const SLink = styled.div.attrs({
  className: "link"
}) `
  margin-top: 100px;
  cursor: pointer;
  border: 1px solid #888;
  padding: 5px 15px;
  
  > a {
    text-decoration: none;
  }

  &:hover {
    transition: all .5s ease;
    background-color: #1E824C;
    color: #fff;
    font-weight: 100;
  }
`;

const Image = styled.img`
  margin-top: 25px;
  width: 500px;
  height: 500px;
  border-radius: 5px;
`;

export default RecipeDetails;
