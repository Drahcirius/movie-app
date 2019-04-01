import React, { Component } from "react";
import { Link } from "react-router-dom";

class MoviePanel extends Component {
  render() {
    return (
      <Link 
        to={{
          pathname: `/moviepage/${this.props.movie.id}`
        }} 
        className="movie-panel"
      >
        <img src={this.props.movie.posterPath} alt={this.props.movie.title} />
      </Link>
    );
  }
}

export default MoviePanel;
