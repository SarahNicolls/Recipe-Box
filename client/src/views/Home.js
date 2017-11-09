import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from '../api';

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
    console.log(this.state)
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
          <div>
            <div>{recipe.strMeal}</div>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
        ))}

      </div>
    );
  }
}

export default Home;
