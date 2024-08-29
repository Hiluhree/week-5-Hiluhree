const connection = require('../config/db');

const UserModel = {
  findById: (id, callback) => {
    const query = 'SELECT * FROM Users WHERE id = ?';
    connection.query(query, [id], callback);
  },
  findByUsername: (username, callback) => {
    const query = 'SELECT * FROM Users WHERE username = ?';
    connection.query(query, [username], callback);
  },
  create: (userData, callback) => {
    const query = 'INSERT INTO Users (username, password) VALUES (?, ?)';
    connection.query(query, [userData.username, userData.password], callback);
  }
};

module.exports = UserModel;