import React, { Component } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import api from '../api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
=======
import api from "../api";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      recipe: {}
>>>>>>> 91fb90997b266342ca7775bbc43a4ed99915168b
    };
  }

  componentDidMount() {
<<<<<<< HEAD
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
=======
    api.recipes.getAll().then(data => {
      this.setState(state => {
        return {
          recipe: data
        };
      });
    });
  }

  render() {
    console.log(this.state);
>>>>>>> 91fb90997b266342ca7775bbc43a4ed99915168b
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
