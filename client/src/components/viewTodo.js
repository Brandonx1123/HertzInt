import React, { useState } from "react";
import axios from "axios";
import { SERVER } from "./constants";
import styled from "styled-components";
import "../css/viewTodo.css";

function ViewTodo({ todoText, isCompleted, user, id, fetchTodos }) {
  const [completed, setCompleted] = useState(isCompleted);
  const [todoDescription, setTodoDescription] = useState(todoText);
  const [message, setMessage] = useState(null);

  const editTodo = (evt) => {
    evt.preventDefault();
    const editTodo = {
      id: id,
      completed,
      todos: todoDescription,
      user: user,
    };

    axios
      .put(`${SERVER}/todos/${user}`, editTodo)
      .then((res) => {
        setMessage("Succesfully updated");
        fetchTodos();
      })
      .catch((err) => {
        setMessage("Error in updating");
        console.log(err);
      });
  };

  const deleteTodo = (evt) => {
    evt.preventDefault();
    axios
      .delete(`${SERVER}/todos/${id}`)
      .then((res) => {
        setMessage("Succesfully deleted");
        fetchTodos();
      })
      .catch((err) => {
        setMessage("Error in deleting");
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <input
          id="inputBox"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        ></input>
        <label className="completed">
          Finished?
          <input
            type="checkbox"
            defaultChecked={completed}
            onClick={(e) => setCompleted(e.target.checked)}
          />
          <span className="checkmark"></span>
        </label>
        <button onClick={editTodo} type="submit">
          Edit
        </button>
        <button onClick={deleteTodo} type="submit">
          Delete
        </button>
      </Container>
      {message}
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3% auto 0 auto;
`;

export default ViewTodo;
