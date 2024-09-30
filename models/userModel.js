const db = require("../config/database");

const User = function (user) {
  this.name = user.name;
  this.email = user.email;
};

// Create a new User
User.create = (newUser, result) => {
  db.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newUser });
  });
};

// Get all Users
User.getAll = (result) => {
  db.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

// Find User by ID
User.findById = (id, result) => {
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res[0]);
  });
};

// Update User by ID
User.updateById = (id, user, result) => {
  db.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [user.name, user.email, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};

// Delete User by ID
User.remove = (id, result) => {
  db.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = User;
