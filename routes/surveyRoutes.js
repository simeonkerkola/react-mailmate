const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select('-recipients'); // Don't fetch the recipients

    res.send({ surveys });
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });

  // Enable Email notifications on SendGrid's settings, https://app.sendgrid.com/settings/mail_settings
  // Post url: https://asioersawrsfdxs.localtunnel.me/api/surveys/webhooks
  // Select Actions: Clicked
  app.post('/api/surveys/webhooks', (req, res) => {
    // console.log(req.body);

    // From the events that SendGrid returns, confirm that event was a 'click' event
    // and take only what we need, eg. the url containing surveyId, choice and email
    const p = new Path('/api/surveys/:surveyId/:choice');
    const filteredEvents = req.body
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) return { email, surveyId: match.surveyId, choice: match.choice };
        return null;
      })
      .filter(event => event !== null); // Only grab events that had id and choice
    // Remove any duplicates of email and id
    const uniqueEvents = _.uniqBy(filteredEvents, 'email', 'surveyId');
    console.log('uniqueEvents', uniqueEvents);

    uniqueEvents.forEach(({ email, surveyId, choice }) => {
      // updateOne finds a one matching record, takes the updates object as an 2nd arg, and then updates it
      Survey.updateOne(
        {
          // Find the right survey
          _id: surveyId,
          // Go thru the recipients, and find the one element that has a matching email and hasn't yet responeded
          recipients: {
            $elemMatch: { email, responded: false },
          },
        },
        {
          // After we have a choise defined (positive or negative) we can assign a key name [choise]
          $inc: { [choice]: 1 }, // Increment count by 1
          $set: { 'recipients.$.responded': true }, // $ lines up with the first match ($elemMatch)
          dateLastResponded: new Date(),
        },
      ).exec(); // Execute the query, send to database
    });

    res.send({});
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
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
