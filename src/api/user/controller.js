
const { insertUser, findUser, updateUser, findSingleUser } = require("../../lib/user/user");
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

const singleUserFindController = async (req, res) => {
  const userEmail = req.params.email
  const query = {email: userEmail}
  const result = await findSingleUser(query)
  res.send(result)
}

const updateUserController = async (req, res) => {
  const userInfo = req.body
  const userEmail = req.params.email
  const filter = {email: userEmail}
  const result = await updateUser(filter,userInfo);
  res.send(result)
}

module.exports = {userInsertController, userFindController, updateUserController, singleUserFindController};
