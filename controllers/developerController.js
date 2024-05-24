const mainModel = require('../models/mongoose');

const getAllDevelopers = async (req, res) => {
  //#swagger.tags=["Developer"]
  const data = await mainModel.developerModel.find();
  data.toArray().then((document) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(document);
  });
};

const getSingleDeveloper = async (req, res) => {
  //#swagger.tags=["Developer"]
  const id = req.params.id;
  const data = await mainModel.developerModel.find({ _id: id });
  data.toArray().then((document) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(document[0]);
  });
};

const getSingleDeveloperByName = async (req, res) => {
    //#swagger.tags=["Developer"]
    const name = req.params.name;
    const data = await mainModel.developerModel.find({ Name: name });
    data.toArray().then((document) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(document[0]);
    });
  };

const createDeveloper = async (req, res) => {
  //#swagger.tags=["Developer"]
    const data = {
        Name: req.body.Name,
        Founded: req.body.Founded,
        Headquarters: req.body.Headquarters,
        President: req.body.President,
        Website: req.body.Website
    }
    const response = await mainModel.developerModel.insertOne(data);
  
  if (response.acknowledged) {
    res.status(200).json({ [collection + '_id']: response.insertedId });
  } else {
    res
      .status(500)
      .json(response.error || `Some error ocurred while creating data for Developer.`);
  }
};

const updateDeveloper = async (req, res) => {
  //#swagger.tags=["Developer"]
    const data = {
        Name: req.body.Name,
        Founded: req.body.Founded,
        Headquarters: req.body.Headquarters,
        President: req.body.President,
        Website: req.body.Website
    }
  const id = req.params.id;
  const response = await mainModel.developerModel.replaceOne({ _id: id }, data);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || `Some error ocurred while updating data from Developer.`);
  }
};

const deleteDeveloper = async (req, res) => {
  //#swagger.tags=["Developer"]
  const id = req.params.id;
  const response = await mainModel.developerModel.deleteOne({ _id: id });
  
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || `Some error ocurred while deleting data from Developer.`);
  }
};

module.exports = {
  getAllDevelopers,
  getSingleDeveloper,
  getSingleDeveloperByName,
  createDeveloper,
  updateDeveloper,
  deleteDeveloper
};