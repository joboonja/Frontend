import axios from 'axios';
import { baseConfig, tokenConfig } from './config';

const Axios = axios.create(baseConfig);
Axios.interceptors.request.use((config) => {
  if (config.url === '/login' || (config.url === '/users' && config.method === 'POST')) return config;
  config.headers.Authorization = `Bearer ${localStorage.getItem(tokenConfig.localStorageKey)}`;
  return config;
});

Axios.interceptors.response.use(response => response, (error) => {
  if (!error.response.status) window.location.href = '/login';
  if (error.response && (error.response.status === 401
      || !error.response.config.url
    || (error.response.config.url && error.response.config.url !== `${error.response.config.baseURL}/login`
          && error.response.status === 403))) window.location.href = '/login';
  return Promise.reject(error);
});

export default Axios;
