const connection = require('../config/db');

exports.addExpense = (req, res) => {
  const { amount, date, category } = req.body;
  const userId = req.userId;

  const query = 'INSERT INTO Expenses (user_id, amount, date, category) VALUES (?, ?, ?, ?)';
  connection.query(query, [userId, amount, date, category], (err, results) => {
    if (err) return res.status(500).send('Server error');
    res.status(201).send('Expense added successfully');
  });
};

exports.viewExpenses = (req, res) => {
  const userId = req.userId;

  const query = 'SELECT * FROM Expenses WHERE user_id = ?';
  connection.query(query, [userId], (err, results) => {
    if (err) return res.status(500).send('Server error');
    res.status(200).json(results);
  });
};

exports.editExpense = (req, res) => {
  const { id } = req.params;
  const { amount, date, category } = req.body;
  const userId = req.userId;

  const query = 'UPDATE Expenses SET amount = ?, date = ?, category = ? WHERE id = ? AND user_id = ?';
  connection.query(query, [amount, date, category, id, userId], (err, results) => {
    if (err) return res.status(500).send('Server error');
    if (results.affectedRows === 0) return res.status(404).send('Expense not found');
    res.status(200).send('Expense updated successfully');
  });
};

exports.deleteExpense = (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  const query = 'DELETE FROM Expenses WHERE id = ? AND user_id = ?';
  connection.query(query, [id, userId], (err, results) => {
    if (err) return res.status(500).send('Server error');
    if (results.affectedRows === 0) return res.status(404).send('Expense not found');
    res.status(200).send('Expense deleted successfully');
  });
};