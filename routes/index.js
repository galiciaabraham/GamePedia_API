const router = require("express").Router();
const models = require("../model/mongoose");
const gamesController = require("../controllers/gameController");

router.get("/", (req, res) => {
  res.send("Welcome to Final Project Team 17");
});

router.use("/review", require("./reviews"));

router.use("/developer", require("./developer"));

router.use("/game", require("./games"));

module.exports = router;
