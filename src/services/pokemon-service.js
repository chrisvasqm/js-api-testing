const apiClient = require('./api-client');

class PokemonService {
  async getAll() {
    return await apiClient.get('/api/v2/pokemon');
  }

  async find(id) {
    return await apiClient.get(`/api/v2/pokemon/${id}`);
  }
}

module.exports = new PokemonService();
