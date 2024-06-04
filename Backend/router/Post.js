const router = require("express").Router();
const Messege = require("../Modals/Messege");
const Post = require("../Modals/Post");
const ResetToken = require("../Modals/ResetToken");
const User = require("../Modals/User");
const { verifyToken } = require("./verifytoken");

//Create Post
router.post("/user/post", verifyToken, async (req, res) => {
  try {
    let { title, image, video } = req.body;
    let newpost = new Post({
      title,
      image,
      video,
      user: req.user.id,
    });
    const post = await newpost.save();
    // // await newpost();
    // console.log(newpost);
    res.status(200).json(post);
  } catch (error) {
    return res.status(500).json("Internal error occured");
  }
});

//upload post by one user
router.get("/get/post/:id", async (req, res) => {
  try {
    const mypost = await Post.find({ user: req.params.id });
    if (!mypost) {
      return res.status(200).json("You don't have any post");
    }

    res.status(200).json(mypost);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

//update user post
router.put("/update/post/:id", verifyToken, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).json("Post does not found");
    }

    post = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    let updatepost = await post.save();
    res.status(200).json(updatepost);
  } catch (error) {
    return res.status(500).json("Internal error occured");
  }
});

//Like
router.put("/:id/like", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.like.includes(req.body.user)) {
      if (post.dislike.includes(req.user.id)) {
        await post.updateOne({ $pull: { dislike: req.user.id } });
      }
      await post.updateOne({ $push: { like: req.body.user } });
      return res.status(200).json("Post has been liked");
    } else {
      await post.updateOne({ $pull: { like: req.body.user } });
      return res.status(200).json("Post has been unlike");
    }
  } catch (error) {
    return res.status(500).json("Internal server error ");
  }
});
//Dislike
router.put("/:id/dislike", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.dislike.includes(req.body.user)) {
      if (post.like.includes(req.user.id)) {
        await post.updateOne({ $pull: { like: req.user.id } });
      }
      await post.updateOne({ $push: { dislike: req.body.user } });
      return res.status(200).json("Post has been disliked");
    } else {
      await post.updateOne({ $pull: { dislike: req.body.user } });
      return res.status(200).json("Post has been unlike");
    }
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
});

//Comment
router.put("/comment/post", verifyToken, async (req, res) => {
  try {
    const { comment, postid } = req.body;
    const comments = {
      user: req.user.id,
      username: req.user.username,
      comment,
    };
    const post = await Post.findById(postid);
    post.comments.push(comments);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
});

//Delete post
router.delete("/delete/post/:id", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.user === req.user.id) {
      const deletepost = await Post.findByIdAndDelete(req.params.id);
      return res.status(200).json("You post has been deleted");
    } else {
      return res.status(400).json("You are not allow to delete this post");
    }
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
});





// // forget password

// router.post("/forgot/password" , async(req,res) => {
// const {email} = req.body;
// const user  = await User.findOne({email:email});
// if(!User){
//   return res.status(400).json("User not found");
// } 
// const token  = await ResetToken.findOne({user:user._id});
// if(token){
//   return res.status(400).json("after one hour you have to reqesut for another token");
// }

// const  RandomTxt = crypto.randomBytes(20).toString('hex');
// const resetToken = new ResetToken({
//   user:user.id,
//   token:RandomTxt
// });
// await resetToken.save();
// })















// /// Get a Following user
// router.get("/following/:id" , async(req , res)=>{
//   // try {
//         const user = await User.findById(req.params.id);
//         const followinguser = await Promise.all(
//               user.Following.map((item)=>{
//                     return User.findById(item)
//               })
//         )

//         let followingList=[];
//         followinguser.map((person)=>{
//               const {email, password , phonenumber , Following , Followers , ...others} = person._doc;
//               followingList.push(others);
//         })

//         res.status(200).json(followingList);
//   // } catch (error) {
//   //      return res.status(500).json("Internal server error")
//   // }
// })

// Get following users
router.get("/following/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json("User not found");
    }
    const followingUsers = await User.find({ _id: { $in: user.Following } });
    res.status(200).json(followingUsers);
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
});

// Get followers
router.get("/followers/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json("User not found");
    }
    const followers = await User.find({ _id: { $in: user.Followers } });
    res.status(200).json(followers);
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
});

// create messege

router.post("/msg", verifyToken, async (req, res) => {
  try {
    const { from, to, messege } = req.body;
    const newMessege = await Messege.create({
      messege: messege,
      Chatusers: [from, to],
      Sender: from,
    });
    
    return res.status(200).json(newMessege);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
});

// create messege

// create message

router.get("/get/chat/msg/:user1Id/:user2Id", async (req, res) => {
  try {
    const from = req.params.user1Id;
    const to = req.params.user2Id;

    const newMesseges = await Messege.find({
      Chatusers: {
        $all: [from, to],
      }
    }).sort({ updatedAt: 1 });

    const allMesseges = newMesseges.map((msg) => {
      return {
        myself: msg.Sender.toString() === from,
        messege: msg.messege
      }
    });

    return res.status(200).json(allMesseges);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
});

// /// Get a Following user
// router.get("/followers/:id", async (req, res) => {
//   // try {
//   const user = await User.findById(req.params.id);
//   const followersuser = await Promise.all(
//     user.Followers.map((item) => {
//       return User.findById(item);
//     })
//   );

//   let followersList = [];
//   followersuser.map((person) => {
//     const { email, password, phonenumber, Following, Followers, ...others } = person._doc;
//       followersList.push(others);
//   });

//   res.status(200).json(followersList);
//   // } catch (error) {
//   //      return res.status(500).json("Internal server error")
//   // }
// });
module.exports = router;



































// yaha se testing hai 




// const router = require("express").Router();
// const Messege = require("../Modals/Messege");
// const Post = require("../Modals/Post");
// const ResetToken = require("../Modals/ResetToken");
// const User = require("../Modals/User");
// const Notification = require("../Modals/Notification");
// const { verifyToken } = require("./verifytoken");

// // Create Post
// router.post("/user/post", verifyToken, async (req, res) => {
//   try {
//     let { title, image, video } = req.body;
//     let newpost = new Post({
//       title,
//       image,
//       video,
//       user: req.user.id,
//     });
//     const post = await newpost.save();
//     res.status(200).json(post);
//   } catch (error) {
//     return res.status(500).json("Internal error occurred");
//   }
// });

// // Upload post by one user
// router.get("/get/post/:id", async (req, res) => {
//   try {
//     const mypost = await Post.find({ user: req.params.id });
//     if (!mypost) {
//       return res.status(200).json("You don't have any post");
//     }
//     res.status(200).json(mypost);
//   } catch (error) {
//     res.status(500).json("Internal server error");
//   }
// });

// // Update user post
// router.put("/update/post/:id", verifyToken, async (req, res) => {
//   try {
//     let post = await Post.findById(req.params.id);
//     if (!post) {
//       return res.status(400).json("Post not found");
//     }
//     post = await Post.findByIdAndUpdate(req.params.id, {
//       $set: req.body,
//     });
//     let updatepost = await post.save();
//     res.status(200).json(updatepost);
//   } catch (error) {
//     return res.status(500).json("Internal error occurred");
//   }
// });

// // Like
// router.put("/:id/like", verifyToken, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     const userId = req.user.id;
//     if (!post.like.includes(userId)) {
//       if (post.dislike.includes(userId)) {
//         await post.updateOne({ $pull: { dislike: userId } });
//       }
//       await post.updateOne({ $push: { like: userId } });
      
//       // Create a notification
//       const notification = new Notification({
//         userId: post.user,
//         message: `${req.user.username} liked your post`,
//       });
//       await notification.save();

//       // Send real-time notification via socket.io
//       const io = req.app.get('io');
//       const recipientSocket = global.onlineUsers.get(post.user.toString());
//       if (recipientSocket) {
//         io.to(recipientSocket).emit('notification-receive', notification);
//       }

//       return res.status(200).json("Post has been liked");
//     } else {
//       await post.updateOne({ $pull: { like: userId } });
//       return res.status(200).json("Post has been unliked");
//     }
//   } catch (error) {
//     return res.status(500).json("Internal server error");
//   }
// });

// // Dislike
// router.put("/:id/dislike", verifyToken, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     const userId = req.user.id;
//     if (!post.dislike.includes(userId)) {
//       if (post.like.includes(userId)) {
//         await post.updateOne({ $pull: { like: userId } });
//       }
//       await post.updateOne({ $push: { dislike: userId } });
//       return res.status(200).json("Post has been disliked");
//     } else {
//       await post.updateOne({ $pull: { dislike: userId } });
//       return res.status(200).json("Post has been unliked");
//     }
//   } catch (error) {
//     return res.status(500).json("Internal server error");
//   }
// });

// // Comment
// router.put("/comment/post", verifyToken, async (req, res) => {
//   try {
//     const { comment, postid } = req.body;
//     const comments = {
//       user: req.user.id,
//       username: req.user.username,
//       comment,
//     };
//     const post = await Post.findById(postid);
//     post.comments.push(comments);
//     await post.save();
    
//     // Create a notification
//     const notification = new Notification({
//       userId: post.user,
//       message: `${req.user.username} commented on your post`,
//     });
//     await notification.save();

//     // Send real-time notification via socket.io
//     const io = req.app.get('io');
//     const recipientSocket = global.onlineUsers.get(post.user.toString());
//     if (recipientSocket) {
//       io.to(recipientSocket).emit('notification-receive', notification);
//     }

//     res.status(200).json(post);
//   } catch (error) {
//     return res.status(500).json("Internal server error");
//   }
// });

// // Delete post
// router.delete("/delete/post/:id", verifyToken, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (post.user.toString() === req.user.id) {
//       await Post.findByIdAndDelete(req.params.id);
//       return res.status(200).json("Your post has been deleted");
//     } else {
//       return res.status(400).json("You are not allowed to delete this post");
//     }
//   } catch (error) {
//     return res.status(500).json("Internal server error");
//   }
// });

// // Other routes...

// module.exports = router;
