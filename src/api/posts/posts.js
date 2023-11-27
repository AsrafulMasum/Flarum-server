const posts = require("../../models/posts/posts");

const postsInsertController = async (req, res) => {
  try {
    const postInfo = new posts({
      name: req.body.name,
      email: req.body.email,
      photoURL: req.body.photoURL,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      upVote: req.body.upVote,
      downVote: req.body.downVote,
      date: req.body.date,
    });
    await postInfo.save();
    res.send({ success: true });
  } catch (error) {
    console.log(error);
    res.send({ message: "Failed to add posts" });
  }
};

module.exports = postsInsertController;
