const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = (app) => {
  app.post('/api/stripe', async (req, res) => {
    // console.log(req.body);

    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id, // token from stripe
    });
    // Current user model req.user, set up automatically by Passport
    req.user.credits += 5;
    const user = await req.user.save(); // Save updated user data

    res.send(user); // Send the user data back to the browser
  });
};
