const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');

require('./config/config');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(process.env.MONGODB_URI);

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [process.env.COOKIE_KEY], // Possibility for multiple keys for security
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // same as authRoutes(app)
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Serve production assets
  app.use(express.static('client/build'));

  // Serve the index.html file if route is still not recognized
  // The catch-all-case
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('app running on a port:', PORT));

module.exports = app;
