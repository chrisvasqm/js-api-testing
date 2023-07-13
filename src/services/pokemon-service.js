const apiClient = require('./api-client');

class PokemonService {
  async getAll() {
    return await apiClient.get(`/pokemon`);
  }

  async find(id) {
    return await apiClient.get(`/pokemon/${id}`);
  }
}

module.exports = new PokemonService();
