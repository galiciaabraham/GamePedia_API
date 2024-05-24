const router = require("express").Router();
const models = require("../model/mongoose");
const gamesController = require("../controllers/gameController");

router.get("/", (req, res) => {
  res.send("Welcome to Final Project Team 17");
});

router.use("/review", require("./reviews"));

router.use("/developer", require("./developer"));

router.use("/game", require("./games"));

// router.get('/game/find-all', gamesController.findAll);

// router.get('/game/find-one/:gameId', gamesController.findGameById);

// router.post('/game/new-game', gamesController.addGame);

// router.put('/game/update-game/:gameId', gamesController.updateGame);

// router.delete('/game/delete/:gameId', gamesController.deleteGame);

module.exports = router;
