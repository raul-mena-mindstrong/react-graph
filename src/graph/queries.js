import gql from 'graphql-tag';

/**
 * simple query definitions
 */
export const SEARCH_QUERY = gql`
    query($search_term: String!) {
        search(query: $search_term, type: REPOSITORY, first: 20) {
            repositoryCount,
            edges {
                node {
                    ... on Repository {
                        name,
                        owner {
                          login  
                        },
                        stargazers {
                            totalCount
                        },
                        url,
                        createdAt
                    }
                }
            }
        }
    }
`;

export const GET_ISSUES = gql`
    query($name: String!, $owner: String!) {
        repository(name: $name, owner: $owner) {
            issues(first: 20, states: [OPEN], orderBy: {field: CREATED_AT, direction: DESC}) {
                nodes {
                    title,
                    bodyHTML,
                    createdAt
                }
            }
        }
    }
`;
