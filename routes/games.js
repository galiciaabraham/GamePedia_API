const express = require('express');
const router = express.Router();

const gamesController = require('../controllers/gamesController');

// Create a new game
router.post('/new-game', gamesController.createGame);

// Retrieve a game by its ID
router.get('/game/:id', gamesController.getGameById);

// Retrieve games by name
router.get('/game/:name', gamesController.getGameByName);

// Retrieve a list of all games
router.get('/game', gamesController.getAllGames);

// Delete a game by its ID
router.delete('/game/:id', gamesController.deleteGame);

module.exports = router;
