import PropTypes from 'prop-types';
import React from 'react';
import Checkout from './Checkout';

export default class CardForm extends React.Component {
  static propTypes = {
    template: PropTypes.object.isRequired,
    auth_token: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>

        <Checkout />

        <form className="pll pts" action={"/card_templates/" + this.props.template.id +"/cards"} method="post">
          <input type='hidden' name='authenticity_token' value={this.props.auth_token} />

          <div className="form-group">
            <label>Selected Greeting</label>
            <div className="form-control">{this.props.template.greeting}</div>
          </div>

          <div className="form-group">
            <label htmlFor="custom_message">Custom Message</label>
            <input className="form-control" id="custom_message" name="custom_message" type="textarea" maxLength="250"></input>
          </div>

          <div className="form-group">
            <label htmlFor="signature">Signature</label>
            <input className="form-control" id="signature" name="signature" type="text" maxLength="100"></input>
          </div>

          <h3>Who Should We Send It To?</h3>

          <div className="form-group">
            <label htmlFor="recipient_name">Recipient Name</label>
            <input className="form-control" id="recipient_name" name="recipient_name" type="text" required></input>
          </div>

          <div className="form-group">
            <label htmlFor="street_address">Street Address</label>
            <input className="form-control" id="street_address" name="street_address" type="text" required></input>
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" type="text" required></input>
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" type="text" required></input>
          </div>

          <div className="form-group">
            <label htmlFor="zip_code">Zip Code</label>
            <input className="form-control" id="zip_code" name="zip_code" type="text" required></input>
          </div>

          <input className="btn btn-default" type="submit" value="Send Card"></input>
        </form>
      </div>
    );
  }
}
