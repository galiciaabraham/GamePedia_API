const express = require("express");
const router = express.Router();
const auth = require("../utilities/authenticate");
const validator = require("../utilities/publisher-validation");
const errorHandling = require("../utilities/utilities");

const publishersController = require("../controllers/publishersController");

// Create a new publisher
router.post(
  "/new-publisher",
  auth.isAthenticated,
  validator.publisherValidator(),
  validator.validate,
  errorHandling.handleErrors(publishersController.createPublisher)
);

// Update an existing publisher
router.put(
  "/update-publisher/:id",
  auth.isAthenticated,
  validator.publisherSearchValidator(),
  validator.validate,
  errorHandling.handleErrors(publishersController.updatePublisher)
);

// Retrieve a publisher by their ID
router.get(
  "/:id",
  validator.publisherSearchValidator(),
  validator.validate,
  errorHandling.handleErrors(publishersController.getPublisherById)
);

// Retrieve publishers by name
router.get(
  "/name/:name",
  validator.publisherNameSearchValidator(),
  validator.validate,
  errorHandling.handleErrors(publishersController.getPublisherByName)
);

// Retrieve a list of all publishers
router.get(
  "/",
  errorHandling.handleErrors(publishersController.getAllPublishers)
);

// Delete a publisher by their ID
router.delete(
  "/:id",
  auth.isAthenticated,
  validator.publisherSearchValidator(),
  validator.validate,
  errorHandling.handleErrors(publishersController.deletePublisher)
);

module.exports = router;
