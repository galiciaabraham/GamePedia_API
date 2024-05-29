const express = require("express");
const router = express.Router();
const auth = require("../utilities/authenticate");

const publishersController = require("../controllers/publishersController");

// Create a new publisher
router.post(
  "/new-publisher",
  auth.isAthenticated,
  publishersController.createPublisher
);

// Update an existing publisher
router.put(
  "/update-publisher/:id",
  auth.isAthenticated,
  publishersController.updatePublisher
);

// Retrieve a publisher by their ID
router.get("/:id", publishersController.getPublisherById);

// Retrieve publishers by name
router.get("/name/:name", publishersController.getPublisherByName);

// Retrieve a list of all publishers
router.get("/", publishersController.getAllPublishers);

// Delete a publisher by their ID
router.delete(
  "/:id",
  auth.isAthenticated,
  publishersController.deletePublisher
);

module.exports = router;
