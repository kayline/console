import PropTypes from 'prop-types';
import React from 'react';
import CardList from './CardList';
import CardDetails from './CardDetails';
import CardSender from './CardSender';

export default class Admin extends React.Component {
  static propTypes = {
    templates: PropTypes.array.isRequired,
    cards: PropTypes.array.isRequired,
    auth_token: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards,
      active_card: this.props.cards[0]
    };
  }

  changeActiveCard(new_active_card_id) {
    var that = this;
    if (new_active_card_id != this.state.active_card.id) {
      var newly_active_card = that.state.cards.find( function(card) {
        return new_active_card_id == card.id;
      });
      that.setState({ active_card: newly_active_card });
    }
  }
  
  toggleSentStatus() {
    this.setState((prevState,props) => {
      var cards = prevState.cards;
      cards.forEach((card) => {
        if (card.id == prevState.active_card.id) {
          card.sent = !card.sent;
        }
      });
      return {cards: cards}
    });
  } 
  
  render() {
    return (
      <div className="container">
        <h3> Admin </h3>
        <div>
          <CardList
            templates = {this.props.templates}
            cards = {this.state.cards}
            active_card_id = {this.state.active_card.id}
            change_active_card = {this.changeActiveCard.bind(this)}
          />
          <CardDetails
            card = {this.state.active_card}
            greeting = "placeholder greeting"
          />
          <CardSender 
            card = {this.state.active_card} 
            update_callback = {this.toggleSentStatus.bind(this)}
            auth_token = {this.props.auth_token} 
          />
        </div>
      </div>
    );
  }
}
