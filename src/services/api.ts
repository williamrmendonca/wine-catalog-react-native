import axios from 'axios';

const api = axios.create({
    baseURL: process.env.DB_HOST,
    headers: {
        'Content-Type': 'application/json'
      }
});
  
export default api;