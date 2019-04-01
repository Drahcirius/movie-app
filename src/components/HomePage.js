import React, { Component } from "react";
import MoviePanel from "./MoviePanel.js";

class HomePage extends Component {
  render() {
    return (
      <div className={"movies page"} >
        {this.props.movies.map(m => (<MoviePanel key={m.id} movie={m}></MoviePanel>))}
      </div>
    );
  }
}

export default HomePage;
