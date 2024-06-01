const mockingoose = require('mockingoose');
const { developerModel } = require('../model/mongoose');
const devController = require('../controllers/developerController');
const httpMocks = require('node-mocks-http');

const {
  Types: { ObjectId }
} = require('mongoose');

describe('Testing getAllDevelopers function from developer Controller', () => {
  let req, res;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
  });

  it('Returns all document in Developer collection and 200 status code', async () => {
    const _developer = [
      {
        _id: '66495afb9f675f2a866238b1',
        Name: 'Microsoft',
        Founded: '1998',
        Headquarters: 'USA',
        President: 'Bill Gates',
        Website: 'microsoft.com'
      },
      {
        _id: '66495afb9f675f2a866238b1',
        Name: 'Ubisoft',
        Founded: '2020',
        Headquarters: 'Canada',
        President: 'John Denver',
        Website: 'ubisoft.com'
      }
    ];

    mockingoose(developerModel).toReturn(_developer, 'find');

    await devController.getAllDevelopers(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(_developer);
  });

  it('should return status 500 when there is an error', async () => {
    mockingoose(developerModel).toReturn(new Error('An error occurred'), 'find');

    await devController.getAllDevelopers(req, res);

    expect(res.statusCode).toBe(500);
    expect(res._isEndCalled()).toBe(true);
    expect(res._getData()).toBe(
      'An error occurred while trying to retrieve developers information.'
    );
  });
});

describe('Testing getSingleDeveloper function from developer Controller', () => {
  let req, res;

  beforeEach(() => {
    req = httpMocks.createRequest({
      params: { id: '664fdf313e6b236e47dd0c76' }
    });
    res = httpMocks.createResponse();
  });

  test('Returns a document by ID from Developer collection and 200 status code', async () => {
    const _developer = {
      _id: '66495afb9f675f2a866238b1',
      Name: 'Ubisoft',
      Founded: '2020',
      Headquarters: 'Canada',
      President: 'John Denver',
      Website: 'ubisoft.com'
    };

    mockingoose(developerModel).toReturn(_developer, 'find');

    await devController.getSingleDeveloper(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(_developer);
  });

  it('should return status 500 when there is an error', async () => {
    mockingoose(developerModel).toReturn(new Error('An error occurred'), 'find');

    await devController.getSingleDeveloper(req, res);

    expect(res.statusCode).toBe(500);
    expect(res._isEndCalled()).toBe(true);
    expect(res._getData()).toBe(
      'An error occurred while trying to retrieve the developer information.'
    );
  });
});

describe('Testing getSingleDeveloperByName function from developer Controller', () => {
  let req, res;

  beforeEach(() => {
    req = httpMocks.createRequest({
      params: { name: 'Ubisoft' }
    });
    res = httpMocks.createResponse();
  });
  test('Returns a document by Name from Developer collection and 200 status code', async () => {
    const _developer = {
      _id: '66495afb9f675f2a866238b1',
      Name: 'Ubisoft',
      Founded: '2020',
      Headquarters: 'Canada',
      President: 'John Denver',
      Website: 'ubisoft.com'
    };

    mockingoose(developerModel).toReturn(_developer, 'find');

    await devController.getSingleDeveloperByName(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(_developer);
  });

  it('should return status 500 when there is an error', async () => {
    mockingoose(developerModel).toReturn(new Error('An error occurred'), 'find');

    await devController.getSingleDeveloperByName(req, res);

    expect(res.statusCode).toBe(500);
    expect(res._isEndCalled()).toBe(true);
    expect(res._getData()).toBe(
      'An error occurred while trying to retrieve the developer information.'
    );
  });
});
