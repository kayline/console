import PropTypes from 'prop-types';
import React from 'react';

export default class CardList extends React.Component {
  static propTypes = {
    templates: PropTypes.array.isRequired,
    cards: PropTypes.array.isRequired,
    active_card_id: PropTypes.number,
    change_active_card: PropTypes.func
  };

  render() {
    var that = this;
    return (
      <div>
        <ul className="list-group pm card-list">
          {this.props.templates.map( function(template) {
            return (
                <li className="list-group-item" key={template.id}> {template.greeting}
                  <ul className="list-group">
                    {that.props.cards.map(function(card) {
                      if (template.id == card.card_template_id) {
                        var css_classes
                        if (card.id == that.props.active_card_id) {
                          css_classes = "list-group-item card-summary active"
                        } else {
                          css_classes = "list-group-item card-summary"
                        }
                        return (
                          <li
                            key={card.id}
                            className={css_classes}
                            id={"card-summary-" + card.id}
                            onClick={ () => that.props.change_active_card(card.id)}
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
