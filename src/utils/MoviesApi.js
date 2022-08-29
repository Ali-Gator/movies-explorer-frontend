import constants from './constants';

class MoviesApi {
  constructor(url) {
    this.url = url;
  }

  async getMovies() {
    const res = await fetch(this.url);
    if (res.ok) {
      return res.json();
    }
    throw new Error(constants.MESSAGE.BEATFILM_ERR);
  }
}

export default new MoviesApi(constants.BEATFILM_URL);
