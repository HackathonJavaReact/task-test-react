import axios from "axios";

import { getToken, removeToken } from "./token";

const REACT_APP_API_BASE_URL = "https://api-gateway-hackathon.herokuapp.com";

console.log(`service/api: Base URL is: ${REACT_APP_API_BASE_URL}`);

const defaultOptions = {
  baseURL: REACT_APP_API_BASE_URL,
  method: "get",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};
const api = axios.create(defaultOptions);

// Set the AUTH token for any request
api.interceptors.request.use((config) => {
  const token = getToken();
  console.log(`service/api: interceptor with token ${token}`);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => {
    console.log("res : ", res);
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
      removeToken();
      throw new Error(`Invalid token`);
    }
    throw err;
  }
);

export default api;
