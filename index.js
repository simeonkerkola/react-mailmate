const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const app = express();

console.log(process.env.GOOGLE_CLIENT_ID);
console.log(process.env.GOOGLE_CLIENT_SECRET);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback', // This uri and the Authorized redirect URIs at google console has to match
    },
    (accessToken) => {
      console.log(accessToken);
    },
  ),
);

app.get(
  '/auth/google', // when aomeone visits this route, they will be redirected to authentication flow
  passport.authenticate('google', {
    scope: ['profile', 'email'], // The scope specifies what we can access in users profile
  }),
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('app running on a port:', PORT));
