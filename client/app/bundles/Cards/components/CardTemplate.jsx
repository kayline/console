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
          {this.props.greeting} 
          <a href={"/card_templates/" + this.props.id + "/cards/new"}> Send </a>
        </li>
      </div>
    );
  }
}
