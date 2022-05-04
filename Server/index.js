const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./users/users-routes");
const todoRoutes = require("./todos/todos-routes");
const cors = require("cors");

const app = express();
app.use(cors()); //used for cross origin path and gets rid of annoying error
app.use(bodyParser.json()); // communicates that the data from the back/front end is json data (javascript Object notation)

const PORT = process.env.Port || 4000; //process.env is for production if needed

app.use("/users", userRoutes); //this initializes the path to users so when creating routes i dont need to type users
app.use("/todos", todoRoutes); //this initializes the routes for todos

app.get("/", (req, res) => {
  res.send("Hello From the Backend :]");
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
