import PropTypes from 'prop-types';
import React from 'react';

export default class CardForm extends React.Component {
  static propTypes = {
    template: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        {this.props.template.greeting}     
      </div>
    );
  }
}