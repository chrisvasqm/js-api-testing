const apiClient = require('./api-client');

const ENDPOINT = '/pokemon';
class PokemonService {
  async getAll() {
    return await apiClient.get(`${ENDPOINT}`);
  }

  async find(id) {
    return await apiClient.get(`${ENDPOINT}/${id}`);
  }
}

module.exports = new PokemonService();
