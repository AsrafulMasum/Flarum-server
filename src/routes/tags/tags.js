const { tagsFindController } = require("../../api/tags/tags");
const tags = require("../../models/tags/tags");


const router = require("express").Router();

router.get("/tags", tagsFindController)

router.get("/tagsName", async (req, res) => {
  const result = await tags.aggregate([
    {
      $project: {
        _id: 0,
        tagsName: 1
      }
    }
  ]);
  res.json(result);
})

module.exports = router;