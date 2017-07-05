import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Home</a>
        </div>
      </nav>
    );
  }
}