import PropTypes from 'prop-types';
import React from 'react';
import CardList from './CardList';

export default class Admin extends React.Component {
  static propTypes = {
    templates: PropTypes.array.isRequired,
    cards: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { selected_card: this.props.cards[0] }
  };

  render() {
    return (
      <div>
        <h3> Admin </h3>
        <CardList
          templates = {this.props.templates}
          cards = {this.props.cards}
          selected_card_id = {this.state.selected_card.id}
        />
      </div>
    );
  };
}
