const mongoose = require('mongoose');

const PaymentMethodSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    accountName: { type: String, required: true },
    accountDetails: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PaymentMethod', PaymentMethodSchema);
