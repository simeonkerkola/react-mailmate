import authReducer from '../../reducers/authReducer';

test('should return user object if logged in', () => {
  const action = {
    type: 'fetch_user',
    payload: 'data',
  };

  const state = authReducer(null, action);
  expect(state).toBe(action.payload);
});

test('should return false if not logged in', () => {
  const action = {
    type: 'fetch_user',
    payload: undefined,
  };

  const state = authReducer(null, action);
  expect(state).toBe(false);
});
