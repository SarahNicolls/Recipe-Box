import React, { Component } from "react";
import Navbar from "../components/Navbar";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h1>Your Recipe Box Profile</h1>
        </div>
      </div>
    );
  }
}

export default Profile;
