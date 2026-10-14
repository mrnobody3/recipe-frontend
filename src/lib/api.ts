import axios from 'axios';

// Creates a centralized Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // Ensures cookies (like sessions or CSRF tokens) are sent with every request
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor: Runs before every request is sent
api.interceptors.request.use(
  (config) => {
    // TODO: Implement JWT tokens later
    // const token = localStorage.getItem('access_token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptor: Runs after every response is received
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Here you can handle global errors, like redirecting to login on a 401 Unauthorized
    if (error.response?.status === 401) {
      console.warn('Unauthorized request. Redirecting to login...');
      // Optional: handle token refresh logic here
    }
    return Promise.reject(error);
  },
);

export default api;
