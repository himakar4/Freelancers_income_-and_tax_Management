const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    invoiceNumber: { type: String, required: true, unique: true },
    issueDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['draft', 'sent', 'paid', 'overdue'], default: 'draft' },
    subtotal: { type: Number, required: true },
    taxAmount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    currency: { type: String, required: true },
    notes: { type: String },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
