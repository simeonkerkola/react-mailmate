const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.get(
    // when someone visits this route, they will be redirected to authentication flow
    '/auth/google',
    passport.authenticate('google', {
      // The scope specifies what we can access in users profile
      scope: ['profile', 'email'],
    }),
  );

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/surveys');
  });

  app.get('/api/logout', (req, res) => {
    req.logout(); // Logs out and kills the cookie
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
