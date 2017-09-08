import React, { Component } from 'react';

import NavBar from './NavBar';

class BaseLayout extends Component {
  render() {
    return (
      <div className="BaseLayout">
        <NavBar />
        { this.props.children }
      </div>
    )
  }
}

export default BaseLayout;
