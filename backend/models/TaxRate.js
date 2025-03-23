const mongoose = require('mongoose');

const TaxRateSchema = new mongoose.Schema({
    countryId: { type: String, required: true },
    name: { type: String, required: true },
    rate: { type: Number, required: true },
    taxYear: { type: Number, required: true },
    applicableFrom: { type: Number, required: true },
    applicableTo: { type: Number },
    description: { type: String }
});

module.exports = mongoose.model('TaxRate', TaxRateSchema);
