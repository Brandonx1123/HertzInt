import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, Navigate } from "react-router-dom";
import styled from "styled-components";
import { SERVER } from "./constants";
import "../css/formStyling.css";

function Login() {
  const [form, setForm] = useState("");
  const push = useNavigate();

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${SERVER}/users/login`, form)
      .then((res) => {
        sessionStorage.setItem("id", res.data.id);
        sessionStorage.setItem("username", res.data.username);
        // setForm(res.data);
        push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="SignInContainer" onSubmit={onSubmit}>
      <div className="FormContainer">
        <header>
          <h1>Sign In!</h1>
        </header>
        <section className="info">
          <TopLink to="/">Todo-Home</TopLink>

          <label className="username">
            <h4>Username</h4>
            <input
              className="inputBox"
              name="username"
              type="text"
              onChange={onChange}
              value={form.username}
              placeholder="type a username..."
              maxLength=""
            />
          </label>
          <div className="submit">
            <button className="button" disabled={!form.username}>
              submit
            </button>
          </div>
          <div>
            <NotWith>
              Not with us? <Link to="/register">Create an Account</Link>
            </NotWith>
          </div>
        </section>
      </div>
    </form>
  );
}

const NotWith = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: -50px;
  padding: 0 0 20px 0;
`;

const TopLink = styled(Link)`
  background: linear-gradient(0.45turn, #00a3cc, #00627a);
  border-radius: 15px;
  padding: 1%;
  margin: 0 auto;
  font-weight: 200;
  color: white;
`;

export default Login;
