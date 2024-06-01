const express = require("express");
const router = express.Router();
const utilities = require("../utilities/utilities");
const devValidator = require("../utilities/developer-validation");
const auth = require("../utilities/authenticate");

const developersController = require("../controllers/developerController");

// Retrieve a list of all developers
/* router.get("/", utilities.handleErrors(developersController.getAllDevelopers)); */

router.get("/", developersController.getAllDevelopers);

// Retrieve a developer by their ID
/* router.get(
  "/:id",
  devValidator.devSearchByIdParamRule(),
  devValidator.validationCheck,
  utilities.handleErrors(developersController.getSingleDeveloper)
); */

router.get("/:id", developersController.getSingleDeveloper);

// Retrieve developers by name
/* router.get(
  "/name/:name",
  devValidator.devSearchByNameParamRule(),
  devValidator.validationCheck,
  utilities.handleErrors(developersController.getSingleDeveloperByName)
); */

router.get("/name/:name", developersController.getSingleDeveloperByName);

// Create a new developer
/* router.post(
  "/",
  auth.isAthenticated,
  devValidator.developerValidatorRules(),
  devValidator.validationCheck,
  utilities.handleErrors(developersController.createDeveloper)
); */

router.post("/", developersController.createDeveloper);

// Update an existing developer
/* router.put(
  "/:id",
  auth.isAthenticated,
  devValidator.developerValidatorRules(),
  devValidator.validationCheck,
  utilities.handleErrors(developersController.updateDeveloper)
); */

router.put("/:id", developersController.updateDeveloper);

// Delete a developer by their ID
/* router.delete(
  "/:id",
  auth.isAthenticated,
  devValidator.devSearchByIdParamRule(),
  devValidator.validationCheck,
  utilities.handleErrors(developersController.deleteDeveloper)
); */

router.delete("/:id", developersController.deleteDeveloper);

module.exports = router;
