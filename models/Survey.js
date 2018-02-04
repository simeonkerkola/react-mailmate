const mongoose = require('mongoose');
const recipientSchema = require('./Recipient');

const { Schema } = mongoose;
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  feedback: {
    positive: { type: Number, default: 0 },
    negative: { type: Number, default: 0 },
  },
  // Make mongoose understand that this is going to be reference to a particular user
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  redirectUrl: { type: String, default: `${process.env.REDIRECT_DOMAIN}/api/thanks` },
  dateLastResponded: Date,
  dateSent: Date,
});

mongoose.model('surveys', surveySchema);
