import PropTypes from 'prop-types';
import React from 'react';

export default class CardList extends React.Component {
  static propTypes = {
    templates: PropTypes.array.isRequired,
    cards: PropTypes.array.isRequired
  };

  render() {
    var that = this;
    return (
      <div>
        <ul className="list-unstyled pm card-list">
          {this.props.templates.map( function(template) {
            return (
                <li key={template.id}> {template.greeting}
                  <ul>
                    {that.props.cards.map(function(card) {
                      if (template.id == card.card_template_id) {
                        return <li key={card.id}> {card.id} - {card.custom_message} </li>
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
