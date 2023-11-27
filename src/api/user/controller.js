
const { insertUser, findUser } = require("../../lib/user/user");
const user = require("./../../models/users/user");

const userInsertController = async (req, res) => {
  const userInfo = req.body;
  const filter = { email: userInfo?.email };
  const isExists = await user.findOne(filter);
  if (isExists) {
    return res.send({ exists: true });
  }
  const result = await insertUser(filter,userInfo);
  res.send(result);
};

const userFindController = async (req, res) => {
  const result = await findUser()
  res.send(result)
}

module.exports = {userInsertController, userFindController};
