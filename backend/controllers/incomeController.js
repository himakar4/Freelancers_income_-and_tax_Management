const Income = require('../models/Income');

exports.addIncome = async (req, res) => {
    const { clientId, amount, currency, description, category, dateReceived, invoiceId } = req.body;

    try {
        const income = new Income({
            userId: req.user.id,
            clientId,
            amount,
            currency,
            description,
            category,
            dateReceived,
            invoiceId
        });

        await income.save();
        res.status(201).json(income);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getIncome = async (req, res) => {
    try {
        const income = await Income.find({ userId: req.user.id }).populate('clientId');
        res.json(income);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
