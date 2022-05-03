import React from "react";
import Form from "./form";
import Header from "./header";
import styled from "styled-components";

function Dashboard() {
  const authUser = sessionStorage.getItem("id");

  //user id is stored in local storage and i will use that to make sure
  //they are getting their todos in the dashboard

  return (
    <DashboardContainer>
      <Header />
      <Form user={authUser} />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export default Dashboard;
