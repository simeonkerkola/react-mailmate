const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.get('/api/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const {
      title, subject, body, recipients, redirectUrl,
    } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      redirectUrl: redirectUrl && redirectUrl,
      // split every address by comma and .trim() cut the extra white space
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // First arg is an Object of Title and Recipients, 2nd arg is the html body of the email
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();

      // Reduce credits, update user and save new user to variable
      req.user.credits -= 1;
      const user = await req.user.save();

      // Send back the updatet user model
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
