// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex("todos")
//     .del()
//     .then(function () {
//       // Inserts seed entries
//       return knex("todos").insert([
//         { todos: "Haveto clean my room", completed: false, user: 1 },
//         { todos: "Haveto wash my car", completed: false, user: 2 },
//         { todos: "lets have some fun", completed: true, user: 2 },
//         { todos: "lets have some chiming", completed: true, user: 2 },
//         { todos: "Haveto upgrade my home", completed: true, user: 3 },
//       ]);
//     });
// };

exports.seed = (knex, Promise) => {
  return knex('todos')
    .del()
    .then(() => {
      return knex('todos').insert([
        { todos: 'Haveto clean my room', completed: false, user: 1 },
        { todos: 'Haveto wash my car', completed: false, user: 2 },
        { todos: 'lets have some fun', completed: true, user: 2 },
        { todos: 'lets have some chiming', completed: true, user: 2 },
        { todos: 'Haveto upgrade my home', completed: true, user: 3 },
      ]);
    });
};
