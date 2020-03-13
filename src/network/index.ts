import axios, { AxiosInstance } from 'axios';
import { REACT_APP_BASE_URL, REACT_APP_API_KEY } from '../config';

const instance: AxiosInstance = axios.create({
    baseURL: REACT_APP_BASE_URL
});

// Add API key as a query param to all outgoing axios requests

instance.defaults.params = {};
instance.defaults.params['api_key'] = REACT_APP_API_KEY;

export default instance;