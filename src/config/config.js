import axios from "axios";
// const api_key = "0d642c0a6843474ed554adc7a81153ff";
const access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDY0MmMwYTY4NDM0NzRlZDU1NGFkYzdhODExNTNmZiIsInN1YiI6IjYzMzJkMWFjYWJkYWZjMDA4MWFiMjkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1S_rsz5YhedK2DJFk5ILv32dRHfh275q2P_HFhGw10c";

// Default config options
const defaultOptions = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

// Create instance
export const api = axios.create(defaultOptions);

// Set the ACCESS token for any request
api.interceptors.request.use(function (config) {
  config.headers.Authorization = access_token ? `Bearer ${access_token}` : "";
  return config;
});
