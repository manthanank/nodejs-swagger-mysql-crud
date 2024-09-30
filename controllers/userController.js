const User = require("../models/userModel");

// Create and Save a new User
exports.create = (req, res) => {
  const newUser = new User(req.body);

  User.create(newUser, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else res.send(data);
  });
};

// Retrieve all Users
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    else res.send(data);
  });
};

// Find a single User with a userId
exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err)
      res.status(500).send({
        message: `Error retrieving User with id ${req.params.userId}`,
      });
    else res.send(data);
  });
};

// Update a User identified by the userId in the request
exports.update = (req, res) => {
  User.updateById(req.params.userId, new User(req.body), (err, data) => {
    if (err)
      res.status(500).send({
        message: `Error updating User with id ${req.params.userId}`,
      });
    else res.send(data);
  });
};

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {
  User.remove(req.params.userId, (err, data) => {
    if (err)
      res.status(500).send({
        message: `Error deleting User with id ${req.params.userId}`,
      });
    else res.send({ message: "User deleted successfully!" });
  });
};
