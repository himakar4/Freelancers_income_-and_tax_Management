const express = require('express');
const { addExpense, getExpenses } = require('../controllers/expenseController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addExpense);
router.get('/', authMiddleware, getExpenses);

module.exports = router;
