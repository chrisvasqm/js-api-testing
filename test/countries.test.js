const { expect } = require('chai');
const countriesService = require('../src/services/countries-service');

describe('Countries Test', async () => {
  it("Get a country's name, currency and phones", async () => {
    const response = await countriesService.find('DO');

    expect(response.country.name).to.equal('Dominican Republic');
    expect(response.country.currency).to.equal('DOP');
    expect(response.country.phones).to.eql(['1809', '1829', '1849']);
  });
});
