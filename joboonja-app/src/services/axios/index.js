import axios from 'axios';
import { baseConfig, tokenConfig } from './config';

const Axios = axios.create(baseConfig);
Axios.interceptors.request.use((config) => {
  if (config.url === '/login' || (config.url === '/users' && config.method === 'POST')) return config;
  config.headers.Authorization = `Bearer ${localStorage.getItem(tokenConfig.localStorageKey)}`;
  return config;
});

Axios.interceptors.response.use(response => response, (error) => {
  console.log(error.response.config);
  if (error && (error.response.status === 401
    || (error.response.config.url !== `${error.response.config.baseURL}/login` && error.response.status === 403))) window.location.href = '/login';
  return Promise.reject(error);
});

export default Axios;
