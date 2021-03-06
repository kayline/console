import PropTypes from 'prop-types';
import React from 'react';
import CardTemplate from './CardTemplate';

export default class CardTemplateList extends React.Component {
  static propTypes = {
    templates: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <ul className="list-inline list-unstyled pm">
          { this.props.templates.map(function(template) {
            return <CardTemplate key={template.id}
            id={template.id} greeting={template.greeting} />
          })}
        </ul>
      </div>
    );
  }
}
