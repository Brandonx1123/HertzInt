const db = require('../data/db-config');

//returns all the todos within the database
const getAlltodos = () => {
  return db('todos');
  // .join('users', 'users.id', 'todos.user')
  // .select('users.username', 'todos.todos', 'todos.completed')
};
//this will return any todos with that specified id, first jumps to the top of list
const gettodosById = (id) => {
  return db('todos').where('user', id);
};
//this allows you to add a new todo to the database if these fields are inserted
const addtodos = (todo) => {
  return db('todos').insert(todo, ['completed', 'todos', 'user']);
};
//this allows you to update a todo (only can change todo task and completed on/off)
const updatetodos = (id, todos) => {
  return db('todos')
    .where('id', id)
    .update(todos, ['todos', 'completed', 'user']);
};
//allows you target a specified todo from ID and delete it
const deletetodos = (id) => {
  return db('todos').where('id', id).del();
};

module.exports = {
  getAlltodos,
  gettodosById,
  addtodos,
  updatetodos,
  deletetodos,
};
