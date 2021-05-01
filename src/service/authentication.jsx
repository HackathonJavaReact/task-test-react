import api from "./api";
import { getToken, removeToken, setToken } from "./token";

const baseURL = "/api/authenticationService/";

function login(username, password) {
  console.log(`service/authentication login ${username}`);
  console.log(`service/authentication login ${password}`);
  return api
    .post(`${baseURL}authenticate`, {
      username: username,
      password: password,
    })
    .then((response) => {
      const token = response.data.token;
      setToken(token);
      return token;
    });
}

function logout() {
  removeToken();
}

function register(username, password) {
  return api
    .post(`${baseURL}register`, {
      username: username,
      password: password,
    })
    .then((response) => {
      const token = response.data.token;
      setToken(token);
      return token;
    });
}

function isUserLoggedIn() {
  return !!getToken();
}

function retrieve(username, password) {
  return api
    .get(`${baseURL}isAuthenticated`, {
      username: username,
      password: password,
    })
    .then((response) => response.data);
}

export { login, logout, register, isUserLoggedIn, retrieve };
