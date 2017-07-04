import PropTypes from 'prop-types';
import React from 'react';

export default class CardTemplate extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    greeting: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <li> 
          <div>
            {this.props.greeting} 
          </div>
          <a className="btn btn-default" href={"/card_templates/" + this.props.id + "/cards/new"}> Use This Greeting </a>
        </li>
      </div>
    );
  }
}
