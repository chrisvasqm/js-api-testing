const { expect } = require('chai');
const { request, gql } = require('graphql-request');

describe('Countries Test', () => {
  it("Get a country's name, currency and phones", async () => {
    const document = gql`
      query {
        country(code: "DO") {
          name
          currency
          phones
        }
      }
    `;

    const response = await request('https://countries.trevorblades.com/', document);

    expect(response.country.name).to.equal('Dominican Republic');
    expect(response.country.currency).to.equal('DOP');
    expect(response.country.phones).to.eql(['1809', '1829', '1849']);
  });
});
