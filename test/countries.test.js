const { expect } = require('chai');
const CountriesService = require('../src/services/countries-service');
const service = new CountriesService();

describe('GraphQL API: Countries', async () => {
  it("should return a country's details by the country's code", async () => {
    const response = await service.find('DO');

    expect(response.country.name).to.equal('Dominican Republic');
    expect(response.country.currency).to.equal('DOP');
    expect(response.country.phones).to.eql(['1809', '1829', '1849']);
  });
});
