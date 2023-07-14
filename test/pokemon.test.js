const { expect } = require('chai');
const PokemonService = require('../src/services/pokemon-service');
const service = new PokemonService();

describe('RESTful API: Pokemons', () => {
  it('should return the full list of Pokemons', async () => {
    const response = await service.getAll();

    expect(response.data.results).to.not.be.empty;
  });

  it("should return a Pokemon's name by ID", async () => {
    const response = await service.find(1);

    expect(response.data.name).to.be.equal('bulbasaur');
  });
});
