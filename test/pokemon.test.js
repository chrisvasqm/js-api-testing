const { expect } = require('chai');
const service = require('../src/services/pokemon-service');

describe('Pokemon Tests', () => {
  it('Get all Pokemons', async () => {
    const response = await service.getAll();

    expect(response.data.results).to.not.be.empty;
  });

  it("Read a Pokemon's name", async () => {
    const response = await service.find(1);

    expect(response.data.name).to.be.equal('bulbasaur');
  });
});
