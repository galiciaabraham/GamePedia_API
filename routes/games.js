const express = require("express");
const errorHandling = require("../utilities/utilities");
const validator = require("../utilities/game-validation");
const router = express.Router();

const gameController = require("../controllers/gameController");

router.get("/", 
errorHandling.handleErrors(
    gameController.findAll
));

router.get("/:gameId", 
validator.gameSearchValidator(),
validator.validate,
errorHandling.handleErrors(
    gameController.findGameById
));

router.post("/", 
validator.gameValidator(),
validator.validate,
errorHandling.handleErrors(
    gameController.addGame
));

router.put("/:gameId", 
validator.gameValidator(),
validator.validate,
errorHandling.handleErrors(
    gameController.updateGame
));

router.delete("/:gameId", 
validator.gameSearchValidator(),
validator.validate,
errorHandling.handleErrors(
    gameController.deleteGame
));

module.exports = router;
