import React, { Component } from "react";
import api from "../api";

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

  render() {
    let { recipe } = this.state;

    return (
      <div>
        <h1>Recipe Details</h1>
        <div>
          <div>
            {recipe.strMeal} - {recipe.strCategory}
          </div>
          <div>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
          <br />
          <div>{recipe.strInstructions}</div>
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
