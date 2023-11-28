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
      commentsCount: req.body.commentsCount,
      date: req.body.date,
    });
    await postInfo.save();
    res.send({ success: true });
  } catch (error) {
    console.log(error);
    res.send({ message: "Failed to add posts" });
  }
};

const findPostsController = async (req, res) => {
  const result = await posts.find();
  res.send(result);
};

const findSinglePostsControllerById = async (req, res) => {
  const id = req.params.id;
  const result = await posts.findById(id).select("upVote downVote -_id");
  res.send(result);
};

const findSinglePostsController = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const query = {
      email: userEmail,
    };
    const result = await posts.find(query);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const updateSinglePostsController = async (req, res) => {
  const id = req.params.id;
  try {
    await posts.findByIdAndUpdate(id, req.body, { new: true });
    res.send({ success: true });
  } catch (error) {
    console.log(error);
    res.send({ message: "Failed to update posts" });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await posts.findByIdAndDelete({ _id: id });
    res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postsInsertController,
  findPostsController,
  findSinglePostsController,
  findSinglePostsControllerById,
  updateSinglePostsController,
  deletePost,
};
