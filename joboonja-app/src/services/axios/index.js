import axios from 'axios';
import { baseConfig } from './config';

const Axios = axios.create(baseConfig);

export default Axios;
