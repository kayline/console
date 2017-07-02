import PropTypes from 'prop-types';
import React from 'react';

export default class CardTemplateList extends React.Component {
  static propTypes = {
    templates: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        { this.props.templates.map(function(template) {
          return <h3 key={template.id}>{template.greeting}</h3>
        })}
      </div>
    );
  }
}
