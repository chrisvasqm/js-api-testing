const apiClient = require('./api-client');

class PokemonService {
  async getAll() {
    return await apiClient.get('/api/v2/pokemon');
  }
}

module.exports = new PokemonService();
