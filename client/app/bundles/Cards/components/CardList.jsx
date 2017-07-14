import PropTypes from 'prop-types';
import React from 'react';

export default class CardList extends React.Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <ul className="list-unstyled pm card-list">
          <li> This is where </li>
          <li> the orders will be listed </li>
        </ul>
      </div>
    );
  }
}
