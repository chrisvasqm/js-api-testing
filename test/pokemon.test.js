const service = require('../src/services/pokemon-service');
const { expect } = require('chai');

describe('Pokemon Tests', () => {
  it('Get all Pokemons', async () => {
    await service
      .getAll()
      .then(response => expect(response.data.results).to.not.be.empty);
  });
});
