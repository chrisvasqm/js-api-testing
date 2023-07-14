const client = require('../clients/rest-client');

class PokemonService {
  async getAll() {
    return await client.get(`/pokemon`);
  }

  async find(id) {
    return await client.get(`/pokemon/${id}`);
  }
}

module.exports = new PokemonService();
