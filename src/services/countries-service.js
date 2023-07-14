const { gql, GraphQLClient } = require('graphql-request');
const client = new GraphQLClient('https://countries.trevorblades.com/');

class Countries {
  async find(code) {
    const query = gql`
      query {
        country(code: \"${code}\") {
          name
          currency
          phones
        }
      }
    `;

    return await client.request(query);
  }
}

module.exports = new Countries();
