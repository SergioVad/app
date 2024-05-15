import axios from 'axios';

export const $api = axios.create({
    baseURL: 'http://45.8.251.11:5000/api',
    // baseURL: 'http://localhost:5000/api',
});
