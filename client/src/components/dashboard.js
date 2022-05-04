import React from "react";
import Todo from "./todo";
import Header from "./header";
import styled from "styled-components";

function Dashboard() {
  const authUser = sessionStorage.getItem("id");

  //user id is stored in local storage and i will use that to make sure
  //they are getting their todos in the dashboard

  return (
    <DashboardContainer>
      <Header />
      <Todo user={authUser} />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 200px;
`;

export default Dashboard;
