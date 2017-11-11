import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import AuthenticatedComponent from '../containers/AuthenticatedComponent'

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
        };
      });
    });
  }

  render() {
    let { recipes } = this.state;
    return (
      <div>
        <div>
          <AuthenticatedComponent
            notAuthed={
              <Container>
                <NavLink>
                  <SLink to={"/Signup"}>Signup</SLink>
                </NavLink>
                <NavLink>
                  <SLink to={"/Login"}>Login</SLink>
                </NavLink>
              </Container>
            }
            isAuthed={
              <Navbar />
            } />
        </div>
        <Title>Recipe Box</Title>
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

const Container = styled.div`
padding: 15px 15px;
text-align: center;
background-color: #1E824C;
`;

const Title = styled.h1.attrs({ className: "f1" }) `text-align: center;`;

const SLink = styled(Link) `
  text-decoration: none;
  color: #fff;
`;

const NavLink = styled.span`
  padding: 5px 15px;
`;

const Meal = styled.div`
  font-size: 24px;
  width: 250px;
  min-height: 50px;
  text-align: center;
  color: #1E824C;
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

const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  padding: 15px;
  display: block;
  margin: 0 auto;
`;

export default Home;
