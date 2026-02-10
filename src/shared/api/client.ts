import axios from 'axios';

const API_URL = 'https://prueba-tecnica-api-tienda-moviles.onrender.com';
const API_KEY = '87909682e6cd74208f41a6ef39fe4191';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
  },
});
