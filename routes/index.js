const router = require("express").Router();
const models = require("../model/mongoose")

router.get("/", (req, res) => {
  res.send("Welcome to Final Project Team 17");
});

router.get('/find-all', (req, res) => {
  models.reviewModel.find({}).then(function(games) {
    res.json(games)
  }).catch(function(error) {
    console.log(error)
  })
})

module.exports = router;
