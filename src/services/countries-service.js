const { request, gql } = require('graphql-request');

class Countries {
  async find(code) {
    const document = gql`
      query {
        country(code: \"${code}\") {
          name
          currency
          phones
        }
      }
    `;

    return await request('https://countries.trevorblades.com/', document);
  }
}

module.exports = new Countries();
