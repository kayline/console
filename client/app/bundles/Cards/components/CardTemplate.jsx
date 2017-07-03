import PropTypes from 'prop-types';
import React from 'react';

export default class CardTemplate extends React.Component {
  static propTypes = {
    greeting: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <li> {this.props.greeting} </li>
      </div>
    );
  }
}
