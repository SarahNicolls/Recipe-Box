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
            <Link to={"/Signup"}>Signup</Link>
          </div>
          <div>
            <Link to={"/Login"}>Login</Link>
          </div>
          <h1>Recipe Box</h1>
        </div>

        {recipes.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <Meal>{recipe.strMeal}</Meal>
              <Image src={recipe.strMealThumb} alt={recipe.strMeal} />
            </Link>
          </div>
        ))}

      </div>
    );
  }
}

const Meal = styled.div`
  font-size: 24px;
`;

const Image = styled.img`
  height: 150px;
  border-radius: 50%;
`;


export default Home;
