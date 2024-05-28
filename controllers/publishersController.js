const model = require("../model/mongoose");

const publishersController = {};

publishersController.getAllPublishers = async (req, res) => {
  //#swagger.tags=["Publisher"]
  model.publisherModel
    .find({})
    .then(function (publishers) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(publishers);
    })
    .catch(function (error) {
      res.status(500).send({
        error:
          "Error retreiving all publishers, please try again or contact support.",
      });
    });
};

publishersController.createPublisher = async (req, res) => {
  //#swagger.tags=["Publisher"]
  const newPublisher = {
    Name: req.body.Name,
    Founded: req.body.Founded,
    Headquarters: req.body.Headquarters,
    President: req.body.President,
    Website: req.body.Website,
  };
  model.publisherModel
    .create(newPublisher)
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({
        error:
          "An error ocurred adding new publisher, please try again or contact support ",
      });
    });
};

publishersController.getPublisherById = async (req, res) => {
  // #swagger.tags=["Publisher"]
  const publisherId = req.params.id;

  model.publisherModel
    .findById(publisherId)
    .then(function (publishers) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(publishers);
    })
    .catch(function (error) {
      res.status(500).send({
        error:
          "An error occurred retrieving the game, please try again or contact support.",
      });
    });
};

publishersController.updatePublisher = async (req, res) => {
  // #swagger.tags=["Publisher"]
  const publisherId = req.params.id;

  const changes = {
    Name: req.body.Name,
    Founded: req.body.Founded,
    Headquarters: req.body.Headquarters,
    President: req.body.President,
    Website: req.body.Website,
  };

  const filter = { _id: publisherId };

  model.publisherModel
    .updateOne(filter, changes)
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(function () {
      res.status(500).send({
        error:
          "An error occurred updating your publisher, please try again or contact support.",
      });
    });
};

publishersController.getPublisherByName = async (req, res) => {
  // #swagger.tags=["Publisher"]
  const publisherName = req.params.name;

  model.publisherModel
    .findOne({ Name: publisherName })
    .then(function (publisher) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(publisher);
    })
    .catch(function () {
      res.status(500).send({
        error:
          "An error occurred retrieving the publisher, please try again or contact support.",
      });
    });
};

publishersController.deletePublisher = async (req, res) => {
  // #swagger.tags=["Publisher"]
  const publisherId = req.params.id;
  const filter = { _id: publisherId };
  model.publisherModel
    .deleteOne(filter)
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(function () {
      res.status(500).send({
        error:
          "An error occurred deleting your publisher, please try again or contact support.",
      });
    });
};

module.exports = publishersController;
