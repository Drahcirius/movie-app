import React, { Component } from "react";

class Nav extends Component {
  changeLocation(location, title = "") {
    this.setState({ location, title });
  }

  render() {
    return (
      <nav className="nav">
        <h1>Pop Movies</h1>
        <span className="dropdown">{"\u22ee"}</span>
      </nav>
    );
  }
}

export default Nav;