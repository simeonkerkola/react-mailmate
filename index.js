const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');
require('./config/config');

mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [process.env.COOKIE_KEY], // Possibility for multiple keys for security
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // same as authRoutes(app)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('app running on a port:', PORT));
