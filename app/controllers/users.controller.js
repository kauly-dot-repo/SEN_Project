const Users = require("../models/users.model.js");

// Create and Save a new Users
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
 console.log(req);
  // Create a Users
  const users = new Users({
    firstname: req.body.firstname,
    surname: req.body.surname,
    department_id: req.body.department_id,
    user_type : req.body.user_type,
    userPassword: req.body.userPassword,
    username: req.body.username
  });

  // Save Users in the database
  Users.create(users, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    else res.send(data);
  });
};

exports.login = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
 console.log(req);
  // Create a Users
  const users = new Users({
    username: req.body.username,
    userPassword: req.body.userPassword
  });

  // Save Users in the database
  Users.login(req.body.username, req.body.userPassword, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    else res.send(data);
  });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  Users.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    else res.send(data);
  });
};

// Find a single Users with a userId
exports.findOne = (req, res) => {
  console.log(req.params);
  Users.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Users with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Users with id " + req.params.userId
        });
      }
    } else res.send(data);
  });
};

// Update a Users identified by the userId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Users.updateById(
    req.params.userId,
    new Users(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Users with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Users with id " + req.params.userId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Users with the specified userId in the request
exports.delete = (req, res) => {
  Users.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Users with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Users with id " + req.params.userId
        });
      }
    } else res.send({ message: `Users was deleted successfully!` });
  });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  Users.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};
