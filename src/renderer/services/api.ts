import axios from 'axios';

const endpoint = 'https://api.jikan.moe/v4';

const api = axios.create({
  baseURL: endpoint,
  timeout: 15000,
});

export default api;
