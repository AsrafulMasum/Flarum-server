const {
  userInsertController,
  userFindController,
  updateUserController,
  singleUserFindController,
} = require("../../api/user/controller");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.put("/users", userInsertController);

router.get("/users", verifyToken, userFindController);

router.get("/users/:email", verifyToken, singleUserFindController);

router.put("/users/:email", verifyToken, updateUserController);

module.exports = router;
