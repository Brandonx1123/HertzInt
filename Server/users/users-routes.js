const express = require("express");
const Users = require("./users-model");

const router = express.Router();

//gets ALL users
router.get("/", (req, res) => {
  Users.findAllUsers()
    .then((user) => {
      res.json(user);
    })
    .catch(() => {
      res.status(500).json({ message: "couldnt find any users" });
    });
});

//retrieves a user by their ID
router.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.status(500).json({ message: "user with this ID doesnt exist" });
    });
});

//creates a new user with a todo
router.post("/register", (req, res) => {
  const credentials = req.body;

  if (!credentials.username) {
    res.status(400).json({ message: "A username is required to register" });
  } else {
    Users.add(credentials)
      .then((user) => {
        // user is the response here
        res.status(201).json(user);
      })
      .catch(() => {
        res.status(404).json({ message: "couldnt add user" });
      });
  }
});

router.post("/login", (req, res) => {
  const credentials = req.body;

  if (!credentials.username) {
    res.status(400).json({ message: "username is required to login" });
  }

  Users.findByUsername(credentials.username)
    .then((user) => {
      console.log("successful login");
      res.status(201).json(user);
    })
    .catch(() => {
      res.status(400).json({ message: "couldnt login" });
    });
});

module.exports = router;
