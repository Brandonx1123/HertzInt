// exports.seed = function (knex, Promise) {
//   // Deletes ALL existing entries
//   return knex("users")
//     .del()
//     .then(function () {
//       // Inserts seed entries
//       return knex("users").insert([
//         { user_id: 1, username: "brandon" },
//         { user_id: 2, username: "Andrew" },
//         { user_id: 3, username: "maximo" },
//       ]);
//     });
// };

exports.seed = (knex, Promise) => {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        { user_id: 1, username: 'brandon' },
        { user_id: 2, username: 'Andrew' },
        { user_id: 3, username: 'maximo' },
      ]);
    });
};
