const Todo = require('./todos-model');
const express = require('express');
const router = express.Router();

// retrieves all todos
router.get('/', (req, res) => {
  Todo.getAlltodos()
    .then((todo) => {
      res.json(todo);
    })
    .catch(() => {
      res.status(500).json({ message: 'couldnt find any todos' });
    });
});

//retrive a specific todo from its ID
router.get('/:id', (req, res) => {
  Todo.gettodosById(req.params.id)
    .then((todo) => {
      res.status(200).json(todo);
    })
    .catch(() => {
      res.status(400).json({ message: 'Todo with this ID doesnt exist' });
    });
});

// adds a new todo to the list
router.post('/', (req, res) => {
  Todo.addtodos(req.body)
    .then((newTodo) => {
      res.status(201).json(newTodo);
    })
    .catch(() => {
      res.status(400).json({
        message: 'cannot add a new todo to server check credentials!',
      });
    });
});

// updates current todo (specified by id)
router.put('/:id', (req, res) => {
  Todo.updatetodos(req.body.id, req.body) // <--- must pass in req.body ad id
    .then((updatedTodo) => {
      res
        .status(200)
        .json(updatedTodo)
        .json({ message: 'successfully updated' });
    })
    .catch(() => {
      res
        .status(400)
        .json({ message: 'cannot update current todo try again!' });
    });
});

router.delete('/:id', (req, res) => {
  Todo.deletetodos(req.params.id)
    .then((deletedTodo) => {
      res
        .status(200)
        .json(deletedTodo)
        .json({ message: 'successfully deleted' });
    })
    .catch(() => {
      res.status(400).json({ message: 'could not delete todo try again!' });
    });
});

module.exports = router;
