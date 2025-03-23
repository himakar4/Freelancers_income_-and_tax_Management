const mongoose = require('mongoose');

const UserTaxSettingsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    taxYear: { type: Number, required: true },
    estimatedAnnualIncome: { type: Number, required: true },
    filingStatus: { type: String, required: true },
    dependents: { type: Number, default: 0 },
    customDeductions: { type: Number, default: 0 },
    customCredits: { type: Number, default: 0 }
});

module.exports = mongoose.model('UserTaxSettings', UserTaxSettingsSchema);
