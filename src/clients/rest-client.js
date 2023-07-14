const axios = require('axios');

const restClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 3000
});

module.exports = restClient;
