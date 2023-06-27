const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co',
  timeout: 3000
});

module.exports = apiClient;
