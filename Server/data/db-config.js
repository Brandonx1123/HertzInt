const knex = require("knex");
const configs = require("./knexFile");

// import knex from 'knex'
// import knexfile from "../knexfile"

module.exports = knex(configs.development);
