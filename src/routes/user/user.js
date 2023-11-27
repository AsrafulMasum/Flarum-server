const { userInsertController, userFindController } = require("../../api/user/controller");


const router = require("express").Router();

router.put("/users", userInsertController);

router.get("/users", userFindController)

module.exports = router;
