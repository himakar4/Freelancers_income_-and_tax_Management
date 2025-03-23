const mongoose = require('mongoose');

const InvoiceItemSchema = new mongoose.Schema({
    invoiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    amount: { type: Number, required: true },
    taxRate: { type: Number, default: 0 }
});

module.exports = mongoose.model('InvoiceItem', InvoiceItemSchema);
