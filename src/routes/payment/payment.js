
const createIntent = require("../../api/payments/payments");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/create-payment-intent", createIntent);

module.exports = router;