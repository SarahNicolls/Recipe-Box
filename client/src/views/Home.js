import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from '../api';
import styled from 'styled-components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    api.recipes.getAll().then(recipes => {
      this.setState(state => {
        return {
          recipes
        }
      })
    })
  }

  render() {
    let { recipes } = this.state;
    return (
      <div>
        <div>
          <div>
            <SLink to={"/Signup"}>Signup</SLink>
          </div>
          <div>
            <SLink to={"/Login"}>Login</SLink>
          </div>
          <Title>Recipe Box</Title>
        </div>
        <Recipes>
          {recipes.map(recipe => (
            <Recipe key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <Meal>{recipe.strMeal}</Meal>
                <Image src={recipe.strMealThumb} alt={recipe.strMeal} />
              </Link>
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

const SLink = styled(Link) `
  text-decoration: none;
`;

const Meal = styled.div`
  font-size: 24px;
  width: 250px;
  min-height: 50px;
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
  justify-content: space-evenly;

  &:hover {
    border: 1px solid #ddd;
    box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, 0.2 );
  }

  > a {
    text-decoration: none;
  }
`;

const Image = styled.img`
  height: 150px;
  border-radius: 50%;
  padding: 15px;
`;


export default Home;
