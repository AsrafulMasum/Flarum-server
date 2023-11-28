const { postsInsertController, findPostsController, findSinglePostsController, updateSinglePostsController, findSinglePostsControllerById, deletePost } = require("../../api/posts/posts");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/posts", verifyToken, postsInsertController);

router.get("/posts", findPostsController);

router.get("/posts/:id", findSinglePostsControllerById);

router.get("/posts-by-email/:email", verifyToken, findSinglePostsController);

router.put("/posts/:id", updateSinglePostsController);

router.delete("/posts/:id", deletePost)

module.exports = router;
