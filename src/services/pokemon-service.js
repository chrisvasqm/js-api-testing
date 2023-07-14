const client = require('./rest-client');

class PokemonService {
  async getAll() {
    return await client.get(`/pokemon`);
  }

  async find(id) {
    return await client.get(`/pokemon/${id}`);
  }
}

module.exports = new PokemonService();
