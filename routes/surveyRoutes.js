const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const {
      title, subject, body, recipients,
    } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      // split every address by comma and .trim() cut the extra white space
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
  });
};
