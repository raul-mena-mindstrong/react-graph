import ApolloClient from 'apollo-boost';

/**
 * init apollo config taken access token defined on .env file
 */
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
});

export default client;
