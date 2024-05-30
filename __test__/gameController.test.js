const mockingoose = require('mockingoose');
const { Types: {ObjectId} } = require('mongoose');

const { gameModel } = require('../model/mongoose');
const gameController = require('../controllers/gameController')
const TestResponse = require('../testUtilities/testResponse');

describe('Testing mongoose game controller', () => {
    test('should return all documents in games collection', async () => {
        const _games = [
            {
                _id: new ObjectId("664fdf313e6b236e47dd0c76"),
                Name: "The Legend",
                Release: "2017",
                Director: "Hidemaro",
                Composer: "Manaka Kataoka",
                Series: "The Legend",
                Developer: "Nintendo",
                Genre: "Action-Adventure"
            },
            {
                _id: new ObjectId("6651345e22e8af9ca812ae56"),
                Name: "Super Mario Kart",
                Release: "2020",
                Director: "Kenta Motokura",
                Composer: "Koji Kondo",
                Series: "Super Mario",
                Developer: "Nintendo",
                Genre: "Racing",
              }            
        ];

        mockingoose(gameModel).toReturn(_games, 'find');

        const req = {};
        const res = new TestResponse();

        await gameController.findAll(req, res);
        expect(res.statusCode).toBe(200);        
    });
});