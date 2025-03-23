const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    countryOfResidence: { type: String },
    taxIdentifier: { type: String },
    profileImage: { type: String },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
