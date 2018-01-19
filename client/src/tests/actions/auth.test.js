import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import { fetchUser } from '../../actions/index';

const user = {
  _id: '666',
  googleId: '777',
  __v: 0,
};

// have to provide our thunk middleware to mock store
const createMockStore = configureMockStore([thunk]);

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

test('should get user object', (done) => {
  const store = createMockStore();

  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  mock.onGet('/api/current_user').reply(200, user);

  store.dispatch(fetchUser()).then(() => {
    const actions = store.getActions(); // our mock store actions
    expect(actions[0]).toEqual({
      type: 'fetch_user',
      payload: user,
    });
    done();
  });
});
