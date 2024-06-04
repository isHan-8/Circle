const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./router/user");
const PostRouter = require("./router/Post");
const cors = require("cors");
const socket = require("socket.io");
dotenv.config();
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("DB connection sucessfull"))
  .catch(() => {
    console.log("some error occured");
  });
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/post", PostRouter);

const server = app.listen(5000, () => {
  console.log("Server is running");
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    Credential: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatsocket = socket;
  socket.on("addUser", (id) => {
    onlineUsers.set(id, socket.id);
  });
  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-receive", data.messege);
    }
  });
});











// // yaha se notifcation ka try kiya 

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const userRouter = require("./router/user");
// const postRouter = require("./router/Post");
// const NotificationRouter = require("./router/notifications");
//  // Import the notification router
// const cors = require("cors");
// const socket = require("socket.io");
// dotenv.config();

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB)
//   .then(() => console.log("DB connection successful"))
//   .catch(() => {
//     console.log("Some error occurred");
//   });

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/user", userRouter);
// app.use("/api/post", postRouter);
// app.use("/api/notifications", NotificationRouter); // Use the notification routes

// // Start the server
// const server = app.listen(5000, () => {
//   console.log("Server is running");
// });

// // Set up socket.io
// const io = socket(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     credentials: true,
//   },
// });

// global.onlineUsers = new Map();

// io.on("connection", (socket) => {
//   global.chatsocket = socket;

//   // Add user to online users map
//   socket.on("addUser", (id) => {
//     onlineUsers.set(id, socket.id);
//   });

//   // Handle send message
//   socket.on("send-msg", (data) => {
//     const sendUserSocket = onlineUsers.get(data.to);
//     if (sendUserSocket) {
//       socket.to(sendUserSocket).emit("msg-receive", data.message);
//     }
//   });

//   // Handle notifications
//   socket.on("send-notification", (data) => {
//     const sendUserSocket = onlineUsers.get(data.to);
//     if (sendUserSocket) {
//       socket.to(sendUserSocket).emit("notification-receive", data);
//     }
//   });

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     for (let [key, value] of onlineUsers.entries()) {
//       if (value === socket.id) {
//         onlineUsers.delete(key);
//       }
//     }
//   });
// });
