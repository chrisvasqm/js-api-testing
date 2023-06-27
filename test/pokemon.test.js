const axios = require('axios');
const { expect } = require('chai');

describe('Pokemon Tests', () => {
  it('Get all Pokemons', async () => {
    await axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(response => expect(response.data.results).is.not.empty)
      .catch(error => console.error(error.message));
  });
});
