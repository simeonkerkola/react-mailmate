const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

// Telling mongoose to create a new collection called users
mongoose.model('users', userSchema);
