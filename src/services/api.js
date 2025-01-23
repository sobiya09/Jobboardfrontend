import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export const submitContactForm = (formData) => {
  return API.post('/requests/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default API;
