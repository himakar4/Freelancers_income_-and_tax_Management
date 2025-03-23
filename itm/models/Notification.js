const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    actionLink: { type: String },
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', NotificationSchema);
