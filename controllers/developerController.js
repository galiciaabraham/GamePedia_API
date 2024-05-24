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
      res.status(500).send("Server Error");
    });

  /*   const data = await mainModel.developerModel.find({});
  data.then((document) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(document);
  }); */
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
      res.status(500).send("Server Error");
    });
  /* data.toArray().then((document) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(document[0]);
  }); */
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
      res.status(500).send("Server Error");
    });
  /*  data.toArray().then((document) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(document[0]);
  }); */
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

  res.status(200).send("Developer Created!");
  /* 
  if (response.acknowledged) {
    res.status(200);
  } else {
    res
      .status(500)
      .json(
        response.error ||
          `Some error ocurred while creating data for Developer.`
      );
  } */
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
  res.status(200).send("Developer Updated!");
  /*   if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error ||
          `Some error ocurred while updating data from Developer.`
      );
  } */
};

const deleteDeveloper = async (req, res) => {
  //#swagger.tags=["Developer"]
  const id = req.params.id;
  const response = await mainModel.developerModel.deleteOne({ _id: id });

  res.status(200).send("Developer Deleted!");
  /*  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error ||
          `Some error ocurred while deleting data from Developer.`
      );
  } */
};

module.exports = {
  getAllDevelopers,
  getSingleDeveloper,
  getSingleDeveloperByName,
  createDeveloper,
  updateDeveloper,
  deleteDeveloper,
};
