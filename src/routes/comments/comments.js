const { postCommentsController, findCommentsByPostId, updateCommentsController, findCommentsContainFeedback } = require("../../api/comments/comments");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/comments", verifyToken, postCommentsController);

router.get("/find-comments-by-postId", findCommentsByPostId)

router.get("/find-comments-contains-feedback", findCommentsContainFeedback)

router.put("/report-comments/:id", updateCommentsController)

module.exports = router;
