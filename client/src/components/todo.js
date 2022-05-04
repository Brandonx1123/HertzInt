import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViewTodo from "./viewTodo";
import { SERVER } from "./constants";

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
    <div>
      <p>Current Todos</p>
      <hr />
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
      <hr />
      <form onSubmit={addTodo}>
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type="text"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
