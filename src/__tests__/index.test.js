const micro = require('micro');
const listen = require('test-listen');
const request = require('request-promise');
const nock = require('nock');
const index = require('../index');
const data = require('../__mock-data__/mock-data');

it('should run server without error', async () => {
  const service = micro(index);
  let error;
  try {
    const url = await listen(service);
    await request(url);
  } catch (err) {
    error = err;
  }

  expect(error).toBeUndefined();
  service.close();
});

it('should return correct json data', async () => {
  nock('https://medium.com')
    .get('/@evenchange4/latest')
    .times(1)
    .query(true)
    .reply(200, data);

  const service = micro(index);
  let error;
  try {
    const url = await listen(service);
    const response = await request({
      uri: `${url}/graphql`,
      qs: {
        query: `query PostQuery($username: String!, $limit: Int!){
          posts(username: $username, limit: $limit) {
            title
            firstPublishedAt
            url
            content {
              subtitle
            }
          }

          user(username: $username) {
            username
            name
            bio
          }
        }`,
        variables: `{
          "username": "evenchange4",
          "limit": 100
        }`,
        operationName: 'PostQuery',
      },
    });
    expect(response).toMatchSnapshot();
  } catch (err) {
    error = err;
  }

  expect(error).toBeUndefined();
  service.close();
});
