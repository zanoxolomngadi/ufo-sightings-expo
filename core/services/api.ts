
import axios from 'axios';
const API_URL = 'https://my-json-server.typicode.com/Louis-Procode/ufo-Sightings/ufoSightings';
export const api = axios.create({
  baseURL: API_URL,
  timeout: 10_000,
});


api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
