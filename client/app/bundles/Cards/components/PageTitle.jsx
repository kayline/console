import PropTypes from 'prop-types';
import React from 'react';

export default class PageTitle extends React.Component {

	static propTypes = {
	    title: PropTypes.string.isRequired,
	  };

  render() {
    return (
      <h1 className="pm">{this.props.title}</h1>
    );
  }
}