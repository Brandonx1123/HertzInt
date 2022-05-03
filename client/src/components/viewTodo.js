import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER } from "./constants";
import styled from "styled-components";

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
      <div>
        <input
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        ></input>
        <label className="container">
          Is Completed
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
      </div>
      {message}
    </div>
  );
}

const Container = styled.div``;

export default ViewTodo;
