class Movie {
  constructor(data) {
    this.id = data.id || 0;
    this.title = data.title || "No Movie";
    this.runtime = data.runtime || 0;
    this.voteAverage= data.vote_average || 0;
    this.overview = data.overview || "none";
    this.releaseDate = new Date(data.release_date || null);
    this._posterPath = data.poster_path || "";
    this._backdropPath = data.backdrop_path || "";
  }

  get posterPath() {
    if (this._posterPath) 
      return `https://image.tmdb.org/t/p/w185${this._posterPath}`;
    return "";
  }

  get backdropPath() {
    if (this._backdropPath)
      return `https://image.tmdb.org/t/p/w185${this._backdropPath}`;
    return "";
  }
}

export default Movie;