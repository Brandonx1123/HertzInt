/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (tbl) => {
      tbl.increments();
      tbl.string('username', 128).unique().notNullable();
    })
    .createTable('todos', (tbl) => {
      tbl.increments();
      tbl.string('todos', 200).notNullable();
      tbl
        .integer('user')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.boolean('completed').notNullable();
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('todos').dropTableIfExists('users');
};

// npx knex migrate:up --knexfile data/knexFile.js
// npx knex migrate:down --knexfile data/knexFile.js
// ^commands to migrate server up and down

// const posts = await db('posts')
//   .join('users', 'users.id', 'posts.user_id')
//   .select('posts.id', 'users.username', 'posts.contents')
//   .where({ user_id: id });
