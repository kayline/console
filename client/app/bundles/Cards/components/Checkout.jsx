import PropTypes from 'prop-types';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const STRIPE_PUBLISHABLE = 'pk_test_ieNQRsKuoIZIr67hlIPz4WhP';

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token => 
  axios.post('/',
    {
      description,
      source: token.id,
      currency: 'USD',
      amount: amount
    })
    .then(successPayment)
    .catch(errorPayment);


export default class Checkout extends React.Component{
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }


  render() {
    return (
      <div className="checkout-container"> 
        <StripeCheckout
	  name={this.props.name}
	  description={this.props.description}
	  amount={this.props.amount}
	  token={onToken(this.props.amount, this.props.description)}
	  currency='USD'
	  stripeKey={STRIPE_PUBLISHABLE}
	/>
      </div>
    );
  };

};
