import PropTypes from 'prop-types';
import React from 'react';

export default class CardList extends React.Component {
  static propTypes = {
    templates: PropTypes.array.isRequired,
    cards: PropTypes.array.isRequired,
    selected_card_id: PropTypes.number
  };

  render() {
    var that = this;
    console.log(this.props.selected_card_id)
    return (
      <div>
        <ul className="list-group pm card-list">
          {this.props.templates.map( function(template) {
            return (
                <li className="list-group-item" key={template.id}> {template.greeting}
                  <ul className="list-group">
                    {that.props.cards.map(function(card) {
                      if (template.id == card.card_template_id) {
                        var selection_state;
                        if (card.id == that.props.selected_card_id) {
                          selection_state = "active";
                        } else {
                          selection_state = "";
                        }
                        return (
                          <li key={card.id}
                            className={"list-group-item card-summary " + selection_state}
                            id={"card-summary-" + card.id}
                          >
                            {card.id} - {card.custom_message}
                          </li>
                        )
                      }
                    })}
                  </ul>
                </li>
              )
          })}
        </ul>
      </div>
    );
  }
}
