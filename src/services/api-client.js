const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 3000
});

module.exports = apiClient;
