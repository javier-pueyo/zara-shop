import axios, { AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export interface ApiError {
  error: string;
  message: string;
}

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': API_KEY || '',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    if (error.response?.data) {
      // Return a rejected promise with the API error structure
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);
