// // routes/notifications.js
// const express = require('express');
// const router = express.Router();
// const Notification = require('../Modals/Notification');
// const auth = require('../middleware/auth');

// // Get notifications for a user
// router.get('/', auth, async (req, res) => {
//   try {
//     const userId = req.userId;
//     const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });
//     res.json(notifications);
//   } catch (error) {
//     res.status(500).send('Server Error');
//   }
// });

// // Mark a notification as read
// router.put('/:id', auth, async (req, res) => {
//   try {
//     const notification = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
//     res.json(notification);
//   } catch (error) {
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;
