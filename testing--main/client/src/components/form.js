import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ViewTodo from './viewTodo';
import { SERVER } from './constants';

export default function Form({ todos, user, updateTodos }) {
  const [todoText, setTodoText] = useState('');
  const push = useNavigate();

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
        updateTodos();
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
            desc={todo.todos}
            push={push}
            user={user}
            updateTodos={updateTodos}
          />
        );
      })}
      <br />
      <hr />
      <form onSubmit={addTodo}>
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type='text'
        ></input>
        <button type='submit'>Add</button>
      </form>
      <button type='submit'>Delete</button>
    </div>
  );
}
