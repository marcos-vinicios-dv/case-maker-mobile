import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-tcc-ecommerce.herokuapp.com/v1/api/',
});

export default api;
