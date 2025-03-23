const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    companyName: { type: String },
    taxIdentifier: { type: String },
    notes: { type: String },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', ClientSchema);
