import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/users', // Base URL for API
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default axiosInstance;
