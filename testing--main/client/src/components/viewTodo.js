import { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER } from './constants';

function ViewTodo({ desc, isCompleted, user, id, updateTodos }) {
  const [completed, setCompleted] = useState(isCompleted);
  const [newDesc, setDesc] = useState(desc);
  const [message, setMessage] = useState(null);

  //   useEffect(() => {
  //     setCompleted(isCompleted);
  //     setDesc(desc);
  //   }, []);

  const editTodo = (evt) => {
    evt.preventDefault();
    const editTodo = {
      id: id,
      completed,
      todos: newDesc,
      user: user,
    };

    axios
      .put(`${SERVER}/todos/${user}`, editTodo)
      .then((res) => {
        setMessage('Succesfully updated');
        updateTodos();
      })
      .catch((err) => {
        setMessage('Error in updating');
        console.log(err);
      });
  };

  const deleteTodo = (evt) => {
    evt.preventDefault();
    axios
      .delete(`${SERVER}/todos/${id}`)
      .then((res) => {
        setMessage('Succesfully deleted');
        updateTodos();
      })
      .catch((err) => {
        setMessage('Error in deleting');
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <input
          value={newDesc}
          onChange={(e) => setDesc(e.target.value)}
        ></input>
        <label className='container'>
          Is Completed
          <input
            type='checkbox'
            defaultChecked={completed}
            onClick={(e) => setCompleted(e.target.value)}
          />
          <span className='checkmark'></span>
        </label>
        <button onClick={editTodo} type='submit'>
          Edit
        </button>
        <button onClick={deleteTodo} type='submit'>
          Delete
        </button>
      </div>
      {/* {message} */}
    </div>
  );
}

export default ViewTodo;
