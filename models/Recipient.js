const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

// Rather than registering this Schema, we are going to export it
module.exports = recipientSchema;
