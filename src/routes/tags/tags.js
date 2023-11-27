const { tagsFindController } = require("../../api/tags/tags");

const router = require("express").Router();

router.get("/tags", tagsFindController)

module.exports = router;