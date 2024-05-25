const express = require("express");
const router = express.Router();
const utilities = require("../utilities/utilities");
const devValidator = require("../utilities/developer-validation");


const developersController = require("../controllers/developerController");

// Retrieve a list of all developers
router.get("/", 
    utilities.handleErrors(
    developersController.getAllDevelopers
));

// Retrieve a developer by their ID
router.get("/:id",
    devValidator.devSearchByIdParamRule(),
    devValidator.validationCheck,
    utilities.handleErrors(
    developersController.getSingleDeveloper
));

// Retrieve developers by name
router.get("/name/:name", 
    devValidator.devSearchByNameParamRule(),
    devValidator.validationCheck,
    utilities.handleErrors(
    developersController.getSingleDeveloperByName
));

// Create a new developer
router.post("/",
    // devValidator.developerValidatorRules(),
    // devValidator.validationCheck,
    utilities.handleErrors(
    developersController.createDeveloper
));

// Update an existing developer
router.put("/:id",
    devValidator.developerValidatorRules(),
    devValidator.validationCheck,
    utilities.handleErrors(
    developersController.updateDeveloper
));

// Delete a developer by their ID
router.delete("/:id", 
    devValidator.devSearchByIdParamRule(),
    devValidator.validationCheck,
    utilities.handleErrors(
    developersController.deleteDeveloper
));

module.exports = router;
