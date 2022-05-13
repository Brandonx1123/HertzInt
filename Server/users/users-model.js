const db = require("../data/db-config");

function findAllUsers() {
  return db("users");
}

function findByUsername(username) {
  return db("users").where("username", username).first();
}
function findById(id) {
  return db("users").select("id", "username").where("id", id).first();
}

function add(user) {
  return db("users").insert(user, ["username"]);
}

module.exports = {
  findAllUsers,
  findById,
  findByUsername,
  add,
};
