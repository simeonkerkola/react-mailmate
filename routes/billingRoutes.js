const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = (app) => {
  app.post('/api/stripe', async (req, res) => {
    // console.log(req.body);

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id, // token from stripe
    });
    console.log(charge);
  });
};
