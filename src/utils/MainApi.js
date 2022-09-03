import constants from './constants';

class MainApi {
  constructor(url) {
    this.url = url;
  }

  async signUp({ email, password, name }) {
    const res = await fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name })
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status.toString());
  }

  async signIn({ email, password }) {
    const res = await fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status.toString());
  }

  async getUserInfo(jwt) {
    const res = await fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status.toString());
  }

  async patchCurrentUser(jwt, { email, name }) {
    const res = await fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({ email, name })
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status.toString());
  }

  async getSavedMovies(jwt) {
    const res = await fetch(`${this.url}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status.toString());
  }

  async postMovie(
    jwt,
    { country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id }
  ) {
    const res = await fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        country: country || 'No data',
        director,
        duration,
        year,
        description,
        image: `${constants.IMG_URL}${image.url}`,
        trailerLink: trailerLink || `${constants.IMG_URL}${image.url}`,
        nameRU,
        nameEN: nameEN || 'No data',
        thumbnail: `${constants.IMG_URL}${image.url}`,
        movieId: id
      })
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status.toString());
  }

  async deleteMovie(jwt, id) {
    const res = await fetch(`${this.url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status.toString());
  }
}

export default new MainApi(constants.API_URL);
