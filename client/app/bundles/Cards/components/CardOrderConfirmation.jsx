import PropTypes from 'prop-types';
import React from 'react';

export default class CardOrderConfirmation extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    greeting: PropTypes.string.isRequired
  };

  render() {
    return (
      <dl className="pl">
        <dt>Selected Greeting:</dt>
        <dd>{this.props.greeting}</dd>
        <dt>Custom Message:</dt>
        <dd>{this.props.card.custom_message}</dd>
        <dt>Signature:</dt>
        <dd>{this.props.card.signature}</dd>
      </dl>
    );
  }
}