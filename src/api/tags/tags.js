const { findTags } = require("../../lib/tags/tags")

const tagsFindController = async (req, res) => {
  const result = await findTags()
  res.send(result)
}

module.exports = {tagsFindController}