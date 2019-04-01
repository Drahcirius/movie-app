import config from "./config.js";
import Movie from "./Movie.js";

const cache = {};

class API {
  async _fetchAPI(resource) {
    const response = await fetch(`http://api.themoviedb.org/3/${resource}?api_key=${config.apiKey}`);
    return response.json();
  }

  async getPopular() {
    if (!cache.moviesCache) {
      const popularResponse = await this._fetchAPI("movie/popular");
      cache.moviesCache = popularResponse.results.map(m => new Movie(m));
    }
    return cache.moviesCache;
  }

  async getMovie(id) {
    if (!cache[id]) {
      const data = await this._fetchAPI(`movie/${id}`);
      cache[id] = new Movie(data);
    }
    return cache[id];
  }
}

export default new API();