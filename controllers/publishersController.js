const model = require("../model/mongoose");

const publishersController = {};

publishersController.getAllPublishers = async (req, res) => {
  //#swagger.tags=["Publisher"]
  try {
    const publishers = await model.publisherModel.find({});
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(publishers);
  } catch (error) {
    res.status(500).send({
      error:
        "Error retrieving all publishers, please try again or contact support.",
    });
  }
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
  try {
    const publishers = await model.publisherModel.findById(publisherId);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(publishers);
  } catch (error) {
    res.status(500).send({
      error:
        "An error occurred retrieving the game, please try again or contact support.",
    });
  }
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
  try {
    const publishers = await model.publisherModel.findOne(publisherName);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(publishers);
  } catch (error) {
    res.status(500).send({
      error:
        "An error occurred retrieving the publisher, please try again or contact support.",
    });
  }
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
