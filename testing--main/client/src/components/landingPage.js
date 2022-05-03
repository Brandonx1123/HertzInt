import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function landingPage() {
  return (
    <div>
      <h1>Hertz Todo Application</h1>
      <br></br>
      <p> Creating Todos Has Never Been So Easy!</p>
      <br></br>
      <TopLink to="/register">Sign Up</TopLink>
      <TopLink to="/login">Log In</TopLink>
    </div>
  );
}

const TopLink = styled(Link)`
  text-decoration: none;
  margin-right: 35px;
  font-weight: 700;
  color: black;
  font-size: 1.2rem;
  border: 1px solid black;
  border-radius: 90%;
`;

export default landingPage;
