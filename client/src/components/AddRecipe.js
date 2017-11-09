import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AddRecipe extends Component {
  constructor() {
    super();

    this.state = {};
  }

  create = () => {
    this.props.history.push("/Profile");
  };

  render() {
    return (
      <div>
        <button onClick={this.create}>Create New Recipe</button>
      </div>
    );
  }
}

export default withRouter(AddRecipe);
