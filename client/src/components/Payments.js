import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Mailmate"
        description="$5 for 5 emails"
        amount={500} // cents
        token={token => console.log(token)} // token we receive from stripe
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        {/* Add a button as a child component */}
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
