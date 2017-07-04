import PropTypes from 'prop-types';
import React from 'react';

export default class CardForm extends React.Component {
  static propTypes = {
    template: PropTypes.object.isRequired,
    auth_token: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <form action={"/card_templates/" + this.props.template.id +"/cards"} method="post">
          <input type='hidden' name='authenticity_token' value={this.props.auth_token} />

          <label>Selected Greeting</label>
          <div>{this.props.template.greeting}</div>

          <label htmlFor="custom_message">Custom Message</label>
          <input id="custom_message" name="custom_message" type="text"></input>

          <input type="submit" value="Send Card"></input>
        </form>
      </div>
    );
  }
}