import PropTypes from 'prop-types';
import React from 'react';

export default class CardDetails extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    greeting: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <dl className="pl">
          <dt>Selected Greeting:</dt>
          <dd>{this.props.greeting}</dd>
          <dt>Custom Message:</dt>
          <dd>{this.props.card.custom_message}</dd>
          <dt>Signature:</dt>
          <dd>{this.props.card.signature}</dd>
        </dl>

        <h3 className="pl">We Will Send This Card To:</h3>

        <dl className="pl">
          <dt>Name:</dt>
          <dd>{this.props.card.recipient_name}</dd>
          <dt>Street Address:</dt>
          <dd>{this.props.card.street_address}</dd>
          <dt>City:</dt>
          <dd>{this.props.card.city}</dd>
          <dt>State:</dt>
          <dd>{this.props.card.state}</dd>
          <dt>Zip Code:</dt>
          <dd>{this.props.card.zip_code}</dd>
        </dl>
      </div>
    );
  }
}