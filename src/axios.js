import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.weatherstack.com/',
});

export default axiosInstance;