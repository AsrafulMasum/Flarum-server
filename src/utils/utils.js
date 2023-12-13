const comments = require("../models/comments/comments");
const posts = require("../models/posts/posts");
const user = require("../models/users/user");

const adminDataController = async (req, res) => {
  try {
    const [postCount, userCount, totalCommentsCount] = await Promise.all([
      posts.countDocuments(),
      user.countDocuments(),
      comments.countDocuments()
    ]);
  
    
  
    res.send({ postCount, userCount, totalCommentsCount });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error" + err.message);
  }
   
};

module.exports = { adminDataController };
