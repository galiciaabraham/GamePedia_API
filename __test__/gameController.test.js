const mockingoose = require('mockingoose');
const { gameModel } = require('../model/mongoose');
const gameController = require('../controllers/gameController')
const TestResponse = require('../testUtilities/testResponse');
const {Types: {ObjectId}} = require('mongoose');

describe('Testing mongoose game controller function that returns all games', () => {
    test('should return all documents in games collection', async () => {
        const _games = [
            {
                _id: "664fdf313e6b236e47dd0c76",
                Name: "The Legend",
                Release: "2017",
                Director: "Hidemaro",
                Composer: "Manaka Kataoka",
                Series: "The Legend",
                Developer: "Nintendo",
                Genre: "Action-Adventure"
            },
            {
                _id: "6651345e22e8af9ca812ae56",
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
        expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_games);  
    });
});

describe('Testing mongoose game controller function that returns one game by Id', () => {
    test('should return a document with one game from the games collection', async () => {
        const _game = 
            {
                _id: "664fdf313e6b236e47dd0c76",
                Name: "The Legend",
                Release: "2017",
                Director: "Hidemaro",
                Composer: "Manaka Kataoka",
                Series: "The Legend",
                Developer: "Nintendo",
                Genre: "Action-Adventure"
            };           
        

        mockingoose(gameModel).toReturn(_game, 'findOne');

        const req = {
            params:{gameId: '664fdf313e6b236e47dd0c76'}
        };
        const res = new TestResponse();

        await gameController.findGameById(req, res);
        expect(res.statusCode).toBe(200);      
        expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_game);  
    });
});

describe('Testing mongoose game controller function that adds a new game', () => {
    test('should return a 204 status code that indicates the game has been added to the games collection', async () => {
        const _games = []

        mockingoose(gameModel).toReturn(_games,'save');

        const req = {
            body:{
                Name: "Princess Peach: Showtime",
                Release: "2024",
                Director: "Etsunobu Ebisu",
                Composer: "Koji Kondo",
                Series: "Super Mario",
                Developer: "Nintendo",
                Genre: "Action-Adventure"
                
            }
        };
        const res = new TestResponse();

        await gameController.addGame(req, res);
        console.log(_games);
        expect(res.statusCode).toBe(204);
        expect(Array.isArray([res.data])).toBe(true)
        expect([res.data].length).toBe(1);
    });
});

describe('Testing mongoose game controller function that updates an existing game', () => {
    test('should return a 204 status code that indicates the game has been updated in the games collection', async () => {
        const _game = {
            _id: "6658d309ada17e7b6d58a820",
            Name: "Princess Peach: Showtime",
            Release: "2024",
            Director: "Etsunobu Ebisu",
            Composer: "Koji Kondo",
            Series: "Super Mario",
            Developer: "Nintendo",
            Genre: "Action-Adventure"
            
        }

        mockingoose(gameModel).toReturn(_game,'updateOne');

        const req = {
            params:{gameId: "6658d309ada17e7b6d58a820"},
            body:{
                Name: "Princess Daisy: Showtime",
                Release: "2025",
                Director: "Etsunobu Ebisu",
                Composer: "Koji Kondo",
                Series: "Super Mario",
                Developer: "Nintendo",
                Genre: "Dancing"
                
            }
        };
        const res = new TestResponse();

        await gameController.updateGame(req, res);
        console.log(_game)
        console.log(res.data);
        expect(res.statusCode).toBe(204);
        expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_game);  
    });
});