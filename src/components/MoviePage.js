import React, { Component } from "react";
import "./MoviePage.css";
import API from "../API.js";
import Movie from "../Movie.js";

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: new Movie({})
    };
  }
  async componentDidMount() {
    const movie = await API.getMovie(this.props.match.params.id);
    this.setState({ movie });
  }

  render() {
    return (
      <div className={"movie-page page page--prev"}>
        <div className="movie-page-header"><span><p>{this.state.movie.title}</p></span></div>
        <article className="movie-page-layout">
          <img className="movie-page-image" src={this.state.movie.posterPath} alt={this.state.movie.title} />
          <div>
            <span className="movie-page-year">{this.state.movie.releaseDate.getFullYear()}</span>
            <span className="movie-page-runtime">{this.state.movie.runtime} min</span>
            <span className="movie-page-rating">{this.state.movie.voteAverage}/10</span>
            <button className="movie-page-favorite">Mark as Favourite</button>
          </div>
          <span className="movie-page-overview span-two">{this.state.movie.overview}</span>
          <hr className="span-two" />
          <span className="trailer-title span-two">Trailers:</span>
          <div className="trailer span-two">
            <div className="triangle"></div>
            <span className="trailer-text">Trailer 1</span>
          </div>
          <hr className="span-two"/>
          <div className="trailer span-two">
            <div className="triangle"></div>
            <span className="trailer-text">Trailer 2</span>
          </div>
        </article>
      </div>
    );
  }
}

export default MoviePage;
