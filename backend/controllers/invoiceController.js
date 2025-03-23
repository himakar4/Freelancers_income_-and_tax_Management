const Invoice = require('../models/Invoice');

exports.createInvoice = async (req, res) => {
    const { clientId, invoiceNumber, issueDate, dueDate, subtotal, taxAmount, totalAmount, currency, notes } = req.body;

    try {
        const invoice = new Invoice({
            userId: req.user.id,
            clientId,
            invoiceNumber,
            issueDate,
            dueDate,
            status: 'draft',
            subtotal,
            taxAmount,
            totalAmount,
            currency,
            notes
        });

        await invoice.save();
        res.status(201).json(invoice);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find({ userId: req.user.id }).populate('clientId');
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
