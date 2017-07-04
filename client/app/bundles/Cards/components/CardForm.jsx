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
        <form className="pl" action={"/card_templates/" + this.props.template.id +"/cards"} method="post">
          <input type='hidden' name='authenticity_token' value={this.props.auth_token} />
          <div className="form-group">
            <label>Selected Greeting</label>
            <div className="form-control">{this.props.template.greeting}</div>
          </div>

          <div className="form-group">
            <label htmlFor="custom_message">Custom Message</label>
            <input className="form-control" id="custom_message" name="custom_message" type="text"></input>
          </div>

          <input className="btn btn-default" type="submit" value="Send Card"></input>
        </form>
      </div>
    );
  }
}