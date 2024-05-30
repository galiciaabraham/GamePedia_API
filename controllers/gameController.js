const model = require("../model/mongoose");

const gameController = {};

gameController.findAll = async (req, res) => {
  // #swagger.tags=["Games"]
  try {
    const games = await model.gameModel.find({});
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(games);
} catch (error) {
    res.status(500).send({
        error: "Error retrieving all games, please try again or contact support."
    });
}
};

gameController.findGameById = async (req, res) => {
  // #swagger.tags=["Games"]
  const gameId = req.params.gameId;

  model.gameModel
    .findById(gameId)
    .then(function (game) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(game);
    })
    .catch(function () {
      res.status(500).send({
        error:
          "An error occurred retrieving the game, please try again or contact support.",
      });
    });
};

gameController.addGame = async (req, res) => {
  // #swagger.tags=["Games"]
  const newGame = {
    Name: req.body.Name,
    Release: req.body.Release,
    Director: req.body.Director,
    Composer: req.body.Composer,
    Series: req.body.Series,
    Developer: req.body.Developer,
    Genre: req.body.Genre,
  };
  model.gameModel
    .create(newGame)
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({
        error:
          "An error occurred adding your game, please try again or contact support.",
      });
    });
};

gameController.updateGame = async (req, res) => {
  // #swagger.tags=["Games"]
  const gameId = req.params.gameId;
  const changes = {
    Name: req.body.Name,
    Release: req.body.Release,
    Director: req.body.Director,
    Composer: req.body.Composer,
    Series: req.body.Series,
    Developer: req.body.Developer,
    Genre: req.body.Genre,
  };
  const filter = { _id: gameId };

  model.gameModel
    .updateOne(filter, changes)
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(function () {
      res.status(500).send({
        error:
          "An error occurred updating your game, please try again or contact support.",
      });
    });
};

gameController.deleteGame = async (req, res) => {
  // #swagger.tags=["Games"]
  const gameId = req.params.gameId;
  const filter = { _id: gameId };
  model.gameModel
    .deleteOne(filter)
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(function () {
      res.status(500).send({
        error:
          "An error occurred deleting your game, please try again or contact support.",
      });
    });
};

module.exports = gameController;
