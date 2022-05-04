import React from "react";
import styled from "styled-components";

export default function Header() {
  const user = sessionStorage.getItem("username");
  return <HeaderDiv>WELCOME BACK {user.toUpperCase()}</HeaderDiv>;
}

const HeaderDiv = styled.div`
  margin: 0 auto;
  text-align: center;
  text-decoration: underline;
  padding: 2%;
  width: 50%;
  color: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border: 2px green solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: linear-gradient(0.45turn, #6cb2a0, #468677);
`;
