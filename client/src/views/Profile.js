import React, { Component } from "react";
import Navbar from "../components/Navbar";
import jwt from "jsonwebtoken";
import { Link } from 'react-router-dom';
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
        <div>
          <h1>Your Recipe Box Profile</h1>
        </div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <div>
              <Link to={`/recipes/${recipe.id}`}>{recipe.strMeal}</Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Profile;
