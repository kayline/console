import PropTypes from 'prop-types';
import React from 'react';

export default class CardSender extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    update_callback: PropTypes.func.isRequired,
    auth_token: PropTypes.string.isRequired
  }

  buttonText() {
    if (this.props.card.sent) {
      return "mark as NOT sent"
    } else {
      return "mark as sent"
    };
  }

  buttonClasses() {
    if (this.props.card.sent) {
      return "btn btn-danger"
    } else {
      return "btn btn-success"
    };
  }	

  render() {
    return (
      <div>
        <button type='button' className={this.buttonClasses()} onClick={this.props.update_callback}>
          {this.buttonText()}
        </button>
      </div>
    );
  }
}
