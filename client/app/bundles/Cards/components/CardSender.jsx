import PropTypes from 'prop-types';
import React from 'react';

export default class CardSender extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <button type='button' class='btn btn-success'>mark as sent</button>
      </div>
    );
  }
}
