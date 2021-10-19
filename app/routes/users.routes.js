module.exports = app => {
  const users = require("../controllers/users.controller.js");

  // Create a new Users
  app.post("/users", users.create);

  // Login a new Users
  app.get("/login", users.login);

  // Retrieve all Users
  app.get("/users", users.findAll);

  // Retrieve a single Users with usersId
  app.get("/users/:usersId", users.findOne);

  // Update a Users with usersId
  app.put("/users/:usersId", users.update);

  // Delete a Users with usersId
  app.delete("/users/:usersId", users.delete);

  // Create a new Users
  app.delete("/users", users.deleteAll);
};
