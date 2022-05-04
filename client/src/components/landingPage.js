import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css/landingPage.css";

function landingPage() {
  return (
    <div className="landingContainer">
      <header>Hertz Todo Application</header>
      <br></br>
      <div className="infoContainer">
        <h1> Creating Todos Has Never Been So Easy!</h1>
        <br></br>
        <div className="linkContainer">
          <TopLink to="/register">Sign Up</TopLink>
          <TopLink to="/login">Log In</TopLink>
        </div>
      </div>
    </div>
  );
}

const TopLink = styled(Link)`
  background: linear-gradient(0.45turn, #00a3cc, #00627a);
  border-radius: 15px;
  border: none;
  padding: 2%;
  margin: 0 auto;
  width: 20%;
  font-weight: 900;
  color: white;
`;

export default landingPage;
