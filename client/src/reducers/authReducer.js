// By default state is null, as to indicate we have no clue if the user is logged in
// Logged in returns: payload ( = User Object)
// Not logged in returns: false
export default (state = null, action) => {
  switch (action.type) {
    case 'fetch_user':
      return action.payload || false;
    default:
      return state;
  }
};
