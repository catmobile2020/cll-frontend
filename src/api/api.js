
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cll.development.cat-sw.com/api', // Change this to your API's base URL
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.response.use(
  (response) => {
    // Handle successful response
    return response;
  },
  (error) => {
    // Handle error response
    return Promise.reject(error);
  }
);

// API methods
export const register = async (data) => {
  return await api.post('/register', data);
};

export const fetchTables = async () => {
  return await api.get('/tables');
};

export default {
    register,
    fetchTables,
  };