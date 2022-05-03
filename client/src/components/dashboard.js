import { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER } from './constants';
import Form from './form';
import Header from './header';
import Login from './login';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [updatedTodos, setUpdate] = useState(false);
  const authUser = sessionStorage.getItem('id');

  useEffect(() => {
    fetchTodos();
  }, [updatedTodos]);

  const fetchTodos = async () => {
    await axios
      .get(`${SERVER}/todos/${authUser}`)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log('Error getting all todos', err);
      });
  };

  // const updateTodos = (removedId) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== removedId);
  //   setTodos(updatedTodos);
  // };

  const updateState = () => {
    fetchTodos();
  };

  return (
    <div className='allTodos'>
      <Header />
      <Form todos={todos} user={authUser} updateTodos={updateState} />
    </div>
  );
}

export default Todo;
