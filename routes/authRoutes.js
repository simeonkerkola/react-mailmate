const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google', // when someone visits this route, they will be redirected to authentication flow
    passport.authenticate('google', {
      scope: ['profile', 'email'], // The scope specifies what we can access in users profile
    }),
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout(); // Logs out and kills the cookie
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
