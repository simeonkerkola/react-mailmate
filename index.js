const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

require('./services/passport');

mongoose.connect(process.env.MONGODB_URI);

const app = express();
require('./routes/authRoutes')(app); // same as authRoutes(app)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('app running on a port:', PORT));
