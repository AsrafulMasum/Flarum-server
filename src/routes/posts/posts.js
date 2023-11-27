const postsInsertController = require("../../api/posts/posts");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/posts", verifyToken, postsInsertController);

module.exports = router;
