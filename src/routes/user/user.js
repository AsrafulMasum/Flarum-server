const { userInsertController, userFindController, updateUserController } = require("../../api/user/controller");
const verifyToken = require("../../middlewares/verifyToken");


const router = require("express").Router();

router.put("/users", userInsertController);

router.get("/users", userFindController)

router.put("/users/:email", updateUserController)

module.exports = router;
