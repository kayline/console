import PropTypes from 'prop-types';
import React from 'react';

export default class CardOrderConfirmation extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    greeting: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <div>Selected Greeting:</div>
        <div>{this.props.greeting}</div>
        <div>Custom Message:</div>
        <div>{this.props.card.custom_message}</div>
      </div>
    );
  }
}