const request = require('supertest');
const app = require('../index');
const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const User = mongoose.model('users');

const user1Id = new ObjectID();
const users = [
  {
    googleId: '555s',
    credits: 1,
  },
];

const populateUsers = (done) => {
  User.remove({})
    .then(() => {
      const user1 = new User(users[0]).save();
      return Promise.all([user1]);
    })
    .then(() => done());
};

beforeEach(populateUsers);

describe('Test the backend routes', () => {
  test('Should get /api/current_user', (done) => {
    request(app)
      .get('/api/current_user')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('Should get /api/logout and redirect to /', (done) => {
    request(app)
      .get('/api/logout')
      .then((response) => {
        expect(response.statusCode).toBe(302);
        done();
      });
  });

  test('Should get /auth/google/callback and redirect to google', (done) => {
    request(app)
      .get('/auth/google/')
      .then((response) => {
        expect(response.statusCode).toBe(302);
        done();
      });
  });
});
