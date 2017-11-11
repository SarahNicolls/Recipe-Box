import React, { Component } from "react";
import Navbar from "../components/Navbar";
import jwt from "jsonwebtoken";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../api';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    let token = jwt.decode(localStorage.getItem("token"));

    api.users.getRecipesByUser(token.id).then(recipes => {
      this.setState(state => {
        return {
          recipes: recipes.recipes
        };
      });
    });
  }

  render() {
    let { recipes } = this.state;
    return (
      <div>
        <Navbar />
        <Title>Saved Recipes</Title>
        <Recipes>
          {recipes.map(recipe => (
            <Recipe>
              <Card to={`/recipes/${recipe.id}`} key={recipe.id}>
                <CardTitle>
                  <CardTitleLink to={`/recipes/${recipe.id}`}>{recipe.strMeal}</CardTitleLink>
                </CardTitle>
                <div>
                  <Image src={recipe.strMealThumb} alt={recipe.strMeal} />
                  <Category to={`/recipes/${recipe.id}`}>{recipe.strArea} {recipe.strCategory}</Category>
                </div>
              </Card>
            </Recipe>
          ))}
        </Recipes>
      </div>
    );
  }
}


const Title = styled.h1.attrs({ className: "f1" }) `
  text-align: center;
  `;

const Recipes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Recipe = styled.div`
  width: calc(100vw / 3);
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  
  &:hover {
    border: 1px solid #ddd;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }

  > a {
    text-decoration: none;
  }
`;


const Card = styled(Link).attrs({
  className: "bg-white center mw5 ba b--black-10 mv4"
}) ``;

const CardTitle = styled.div.attrs({
  className: "pv2 ph3"
}) `
  text-align: center;
`;

const CardTitleLink = styled(Link).attrs({
  className: "f6 ttu tracked link"
}) `
  color: #1E824C;
`;

const SLink = styled(Link) `  
  
`;

const Category = styled(Link).attrs({
  className: "link dim lh-title"
}) `
  display: flex;
  padding: 5px 0;
  justify-content: center;
`;

const Image = styled.img.attrs({
  className: "w-100 db"
}) `
  min-height: 250px;
`;

export default Profile;
