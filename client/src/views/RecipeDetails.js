import React, { Component } from "react";
import api from "../api";

class RecipeDetails extends Component {
  constructor() {
    super();

    this.state = {
      recipe: {}
    };
  }

  render() {
    return (
      <div>
        <h1>Recipe Details</h1>
      </div>
    );
  }
}

export default RecipeDetails;
