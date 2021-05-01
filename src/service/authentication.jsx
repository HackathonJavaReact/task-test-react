import api from "./api";
import { getToken, removeToken, setToken } from "./token";

function login(username, password) {
  console.log(`service/authentication login ${username}`);
  console.log(`service/authentication login ${password}`);
  return api
    .post("authenticate", {
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
    .post("register", {
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
    .get("api/authenticated/me", {
      username: username,
      password: password,
    })
    .then((response) => response.data);
}

export { login, logout, register, isUserLoggedIn, retrieve };
