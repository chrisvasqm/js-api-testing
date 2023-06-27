const { expect } = require('chai');
const service = require('../src/services/pokemon-service');

describe('Pokemon Tests', () => {
  it('Get all Pokemons', async () => {
    await service
      .getAll()
      .then(response => expect(response.data.results).to.not.be.empty);
  });

  it("Read a Pokemon's name", async () => {
    await service
      .find(1)
      .then(response => expect(response.data.name).to.be.equal('bulbasaur'));
  });
});
