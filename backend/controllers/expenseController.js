const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
    const { category, amount, currency, description, dateIncurred, isTaxDeductible } = req.body;

    try {
        const expense = new Expense({
            userId: req.user.id,
            category,
            amount,
            currency,
            description,
            dateIncurred,
            isTaxDeductible
        });

        await expense.save();
        res.status(201).json(expense);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user.id });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
