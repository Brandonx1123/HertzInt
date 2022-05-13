import React, { useState, useEffect } from "react";
import formSchema from "./formSchema";
import * as yup from "yup";
import "../css/formStyling.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const initialFormValues = {
  username: "",
  //   password: "",
};

const initialFormErrors = {
  username: "",
  //   password: "",
};
const initialDisabled = true;

function Register() {
  const [form, setForm] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const push = useNavigate();

  const inputChange = (username, value) => {
    yup
      .reach(formSchema, username)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [username]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [username]: err.errors[0] });
      });
    setForm({
      ...form,
      [username]: value,
    });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:4000/users/register", form)
      .then((res) => {
        console.log("RES IN POST IS HERE", res);
        setForm(res);
      })
      .catch((err) => {
        console.log(err);
      });
    push("/login");
  };

  useEffect(() => {
    formSchema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <div className="FormGroupInputs">
        <header>
          <h1>Sign Up Now!</h1>
        </header>

        <section className="info">
          <HomeLink>
            <Link to="/">Todo-Home</Link>
          </HomeLink>
          <label className="username">
            <h4>Username</h4>
            <div>{formErrors.username}</div>
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

          {/* <label className="password">
            <h4>Password</h4>
            <div>{formErrors.password}</div>
            <input
              className="inputBox"
              name="password"
              type="password"
              onChange={onChange}
              value={form.password}
              placeholder="type a password..."
              maxLength="30"
            />
          </label> */}
          <div className="submit">
            <button className="button" disabled={disabled}>
              submit
            </button>
          </div>
          <div>
            <NotWith>
              Already have an account? <Link to="/login">Login here</Link>
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

const HomeLink = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
`;

export default Register;
