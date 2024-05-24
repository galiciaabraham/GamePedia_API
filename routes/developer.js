const express = require("express");
const utilities = require("../utilities/utilities");
const router = express.Router();

const developersController = require("../controllers/developerController");

// Create a new developer
router.post("/", developersController.createDeveloper);

// Update an existing developer
router.put("/:id", developersController.updateDeveloper);

// Retrieve a developer by their ID
router.get("/:id", developersController.getSingleDeveloper);

// Retrieve developers by name
router.get("/name/:name", developersController.getSingleDeveloperByName);

// Retrieve a list of all developers
router.get("/", developersController.getAllDevelopers);

// Delete a developer by their ID
router.delete("/:id", developersController.deleteDeveloper);

module.exports = router;
