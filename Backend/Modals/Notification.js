// // models/Notification.js
// const mongoose = require('mongoose');

// const notificationSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   message: { type: String, required: true },
//   userImage: { type: String, required: true },
//   postImage: { type: String, default: '' },
//   read: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now },
// });

// const Notification = mongoose.model('Notification', notificationSchema);

// module.exports = Notification;
