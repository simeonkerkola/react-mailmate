const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

// Stuff user info to a cookie
passport.serializeUser((user, done) => {
  done(null, user.id); // user.id is mongo's _id
});

// Get the user ID from the cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback', // This uri and the Authorized redirect URIs at google console has to match
      proxy: true, // Tell GoogleStrategy to trust a proxy (eg. Heroku's)
    },
    async (accessToken, refreshToken, profile, done) => {
      // Look for an existing user
      const exsistingUser = await User.findOne({ googleId: profile.id });
      if (exsistingUser) {
        return done(null, exsistingUser); // 1st arg: if error, run this, 2nd arg: User Record
      }
      // Create a new user if not found
      const newUser = await new User({ googleId: profile.id }).save();
      return done(null, newUser); // Return the new user
    },
  ),
);
