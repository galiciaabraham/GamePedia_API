const express = require("express");
const utilities = require("../utilities/utilities");
const router = express.Router();

const gameController = require("../controllers/gameController");

router.get("/", gameController.findAll);

router.get("/:gameId", gameController.findGameById);

router.post("/", gameController.addGame);

router.put("/:gameId", gameController.updateGame);

router.delete("/:gameId", gameController.deleteGame);

module.exports = router;
