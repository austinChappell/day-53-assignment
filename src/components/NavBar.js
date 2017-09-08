import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink activeClassName="active" to="/" exact>Home</NavLink>
        <NavLink activeClassName="active" to="/createpost">Write</NavLink>
        <NavLink activeClassName="active" to="/allposts">Discover</NavLink>
      </div>
    )
  }
}

export default NavBar;
