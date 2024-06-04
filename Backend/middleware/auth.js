// // middleware/auth.js
// const jwt = require('jsonwebtoken');
// const User = require('../Modals/User'); // Adjust the path as needed

// const auth = async (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');
//   if (!token) {
//     return res.status(401).send('Access Denied');
//   }

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = verified._id;

//     // Fetch user details and attach to request object
//     const user = await User.findById(req.userId).select('name profileImage');
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
//     req.user = user;

//     next();
//   } catch (error) {
//     res.status(400).send('Invalid Token');
//   }
// };

// module.exports = auth;
