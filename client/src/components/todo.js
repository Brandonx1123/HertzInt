import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViewTodo from "./viewTodo";
import { SERVER } from "./constants";
import styled from "styled-components";

export default function Form({ user }) {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const push = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    await axios
      .get(`${SERVER}/todos/${user}`)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log("Error getting all todos", err);
      });
  };

  // const updateTodos = (removedId) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== removedId);
  //   setTodos(updatedTodos);
  // };
  const addTodo = (evt) => {
    evt.preventDefault();
    const newTodo = {
      user: user,
      todos: todoText,
      completed: false,
    };
    axios
      .post(`${SERVER}/todos`, newTodo)
      .then((res) => {
        fetchTodos(); //this is for UI purposes so the state is updated without refreshing
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TodoContainer>
      <CurrentHeading> Your Current Tasks:</CurrentHeading>
      {todos.map((todo, i) => {
        return (
          <ViewTodo
            key={i}
            id={todo.id}
            isCompleted={todo.completed}
            todoText={todo.todos}
            push={push}
            user={user}
            fetchTodos={fetchTodos}
          />
        );
      })}
      <br />
      <hr></hr>
      <form onSubmit={addTodo}>
        <label>
          <span>Add a task: </span>
          <input
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            type="text"
          ></input>
        </label>
        <button type="submit">Add</button>
      </form>
    </TodoContainer>
  );
}

const TodoContainer = styled.div`
  border: 1px solid black;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 50%;
  padding: 2%;
  text-align: center;
  background: linear-gradient(0.95turn, #dfdfdf, #f6f6f648);
`;

const CurrentHeading = styled.h2`
  text-decoration: underline;
  font-weight: 900;
`;
