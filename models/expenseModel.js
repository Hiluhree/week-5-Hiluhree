const connection = require('../config/db');

const ExpenseModel = {
  create: (expenseData, callback) => {
    const query = 'INSERT INTO Expenses (user_id, amount, date, category) VALUES (?, ?, ?, ?)';
    connection.query(query, [expenseData.user_id, expenseData.amount, expenseData.date, expenseData.category], callback);
  },
  findByUserId: (userId, callback) => {
    const query = 'SELECT * FROM Expenses WHERE user_id = ?';
    connection.query(query, [userId], callback);
  },
  update: (id, expenseData, userId, callback) => {
    const query = 'UPDATE Expenses SET amount = ?, date = ?, category = ? WHERE id = ? AND user_id = ?';
    connection.query(query, [expenseData.amount, expenseData.date, expenseData.category, id, userId], callback);
  },
  delete: (id, userId, callback) => {
    const query = 'DELETE FROM Expenses WHERE id = ? AND user_id = ?';
    connection.query(query, [id, userId], callback);
  }
};

module.exports = ExpenseModel;