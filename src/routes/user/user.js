const user = require("../../models/users/user");

const router = require("express").Router();

router.put("/users", async (req, res) => {
  const userInfo = req.body;
  const filter = { email: userInfo?.email };
  const isExists = await user.findOne(filter);
  if (isExists) {
    return res.send({ exists: true });
  }
  const options = { upsert: true };
  const updatedUser = {
    $set: {
      email: userInfo?.email,
      name: userInfo?.name,
      photoURL: userInfo?.photoURL,
      role: userInfo?.role,
    },
  };
  const result = await user.updateOne(filter, updatedUser, options);
  res.send(result);
});

module.exports = router;
