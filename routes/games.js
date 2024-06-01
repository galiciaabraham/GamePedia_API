const express = require("express");
const errorHandling = require("../utilities/utilities");
const validator = require("../utilities/game-validation");
const router = express.Router();
const auth = require("../utilities/authenticate");

const gameController = require("../controllers/gameController");

router.get("/", errorHandling.handleErrors(gameController.findAll));

/* router.get("/", gameController.findAll); */

router.get(
  "/:gameId",
  validator.gameSearchValidator(),
  validator.validate,
  errorHandling.handleErrors(gameController.findGameById)
);

/* router.get("/:gameId", gameController.findGameById); */

router.post(
  "/",
  auth.isAthenticated,
  validator.gameValidator(),
  validator.validate,
  errorHandling.handleErrors(gameController.addGame)
);

/* router.post("/", gameController.addGame); */

router.put(
  "/:gameId",
  auth.isAthenticated,
  validator.gameValidator(),
  validator.validate,
  errorHandling.handleErrors(gameController.updateGame)
);

/* router.put("/:gameId", gameController.updateGame); */

router.delete(
  "/:gameId",
  auth.isAthenticated,
  validator.gameSearchValidator(),
  validator.validate,
  errorHandling.handleErrors(gameController.deleteGame)
);
/* 
router.delete("/:gameId", gameController.deleteGame); */

module.exports = router;
