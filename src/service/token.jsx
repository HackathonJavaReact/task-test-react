function setToken(token) {
  if (token) {
    console.log(`service/token setToken ${token.substr(0, 10)}...`);
    localStorage.setItem("token", token);
  }
}

function getToken() {
  return localStorage.getItem("token");
}

function removeToken() {
  localStorage.removeItem("token");
}

export { setToken, getToken, removeToken };
