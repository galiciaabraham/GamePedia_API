const mainModel = require("../model/mongoose");

const getAllDevelopers = async (req, res) => {
  //#swagger.tags=["Developer"]
  mainModel.developerModel
    .find({})
    .then(function (data) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send("An error occurred while trying to retrieve developers information.");
    });

};

const getSingleDeveloper = async (req, res) => {
  //#swagger.tags=["Developer"]
  const id = req.params.id;
  mainModel.developerModel
    .find({ _id: id })
    .then(function (data) {
      res.setHeader("Content-Type", "application/json");  
      res.status(200).json(data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send("An error occurred while trying to retrieve the developer information.");
    });

};

const getSingleDeveloperByName = async (req, res) => {
  //#swagger.tags=["Developer"]
  const name = req.params.name;
  mainModel.developerModel
    .find({ Name: name })
    .then(function (data) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send("An error occurred while trying to retrieve the developer information.");
    });

};

const createDeveloper = async (req, res) => {
  //#swagger.tags=["Developer"]
  const data = {
    Name: req.body.Name,
    Founded: req.body.Founded,
    Headquarters: req.body.Headquarters,
    President: req.body.President,
    Website: req.body.Website,
  };
  const response = await mainModel.developerModel.create(data);
  if (response) {
    res.status(204);
  } else {
    res.status(500).send("An error occurred while trying to create a new developer.");
  }

};

const updateDeveloper = async (req, res) => {
  //#swagger.tags=["Developer"]
  const data = {
    Name: req.body.Name,
    Founded: req.body.Founded,
    Headquarters: req.body.Headquarters,
    President: req.body.President,
    Website: req.body.Website,
  };
  const id = req.params.id;
  const response = await mainModel.developerModel.findByIdAndUpdate(
    { _id: id },
    data
  );

  if (response) {
    res.status(204);
  } else {
    res.status(500).send("An error occurred while trying to update the developer information.");
  }

};

const deleteDeveloper = async (req, res) => {
  //#swagger.tags=["Developer"]
  const id = req.params.id;
  const response = await mainModel.developerModel.deleteOne({ _id: id });

  if (response) {
    res.status(204);
  } else {
    res.status(500).send("An error occurred while trying to delete a developer.");
  }

};

module.exports = {
  getAllDevelopers,
  getSingleDeveloper,
  getSingleDeveloperByName,
  createDeveloper,
  updateDeveloper,
  deleteDeveloper,
};
