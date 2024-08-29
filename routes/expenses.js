const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/add', expenseController.addExpense);
router.get('/view', expenseController.viewExpenses);
router.put('/edit/:id', expenseController.editExpense);
router.delete('/delete/:id', expenseController.deleteExpense);

module.exports = router;