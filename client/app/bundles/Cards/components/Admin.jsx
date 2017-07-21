import PropTypes from 'prop-types';
import React from 'react';
import CardList from './CardList';

export default class Admin extends React.Component {
  static propTypes = {
    templates: PropTypes.array.isRequired,
    cards: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { active_card: this.props.cards[0] }
    this.state.changeActiveCard = this.changeActiveCard.bind(this)
  }

  changeActiveCard(new_active_card_id) {
    console.log('changing active card');
    console.log(new_active_card_id);
  }

  render() {
    return (
      <div className="container">
        <h3> Admin </h3>
        <CardList
          templates = {this.props.templates}
          cards = {this.props.cards}
          active_card_id = {this.state.active_card.id}
          change_active_card = {this.state.changeActiveCard}
        />
      </div>
    );
  }
}
