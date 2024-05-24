const mongoose =require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const models = {}

mongoose.connect(process.env.CONNECTION_URI);

const gameSchema = new mongoose.Schema({
    Name: String,
    Release: String,
    Director: String,
    Composer: String,
    Series: String,
    Developer: String,
    Genre: String
})

const developerSchema = new mongoose.Schema({
    Name: String,
    Founded: String,
    Headquarters: String,
    President: String,
    Website:String
})

const publisherSchema = new mongoose.Schema({
    Name: String,
    Founded: String,
    Headquarters: String,
    President: String,
    Website:String
})

const reviewSchema = new mongoose.Schema({
    UserId: Number,
    Title: String,
    Content: String,
    Rating: Number,
    Date: String,
    Verified: String
})

models.reviewModel = mongoose.model('reviews', reviewSchema);

models.publisherModel = mongoose.model('publishers', publisherSchema);

models.developerModel = mongoose.model('developers', developerSchema);
 
models.gameModel = mongoose.model('games', gameSchema);

module.exports = models;