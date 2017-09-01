import ProptTypes from 'prop-types';
import React from 'react';

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

export default class Checkout extends React.Component{

  render() {
    return (
      <div> Here is where you would enter your Card Number </div>
    );
  };

};
