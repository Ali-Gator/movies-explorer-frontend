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
    throw new Error();
  }
}

export default new MainApi(constants.API_URL);
