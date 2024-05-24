const express = require('express');
const router = express.Router();

const developersController = require('../controllers/developersController');

// Create a new developer
router.post('/new-developer', developersController.createDeveloper);

// Update an existing developer
router.put('/update-developer/:id', developersController.updateDeveloper);

// Retrieve a developer by their ID
router.get('/developer/:id', developersController.getDeveloperById);

// Retrieve developers by name
router.get('/developer/:name', developersController.getDeveloperByName);

// Retrieve a list of all developers
router.get('/developer', developersController.getAllDevelopers);

// Delete a developer by their ID
router.delete('/developer/:id', developersController.deleteDeveloper);

module.exports = router;
