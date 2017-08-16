import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios'; 

export default class CardSender extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
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

  toggleSentStatus() {
    var url = "/card_templates/" + this.props.card.card_template_id + "/cards/" + this.props.card.id
    var data = {}
    var options = {}
    options['headers'] = {}
    options['headers']['X-CSRF-Token'] = this.props.auth_token
    console.log(options)
    axios.put(url, data, options)
      .then(function (response) {
        console.log(response);
      }) 
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log("The auth token was " + this.props.auth_token)

    return (
      <div>
        <button type='button' className={this.buttonClasses()} onClick={this.toggleSentStatus.bind(this)}>
          {this.buttonText()}
        </button>
      </div>
    );
  }
}
