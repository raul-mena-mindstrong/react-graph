import gql from 'graphql-tag';

/**
 * simple query definitions
 */
export const SEARCH_QUERY = gql`
    query($name: String!, $limit: Int!) {
        topic(name: $name) {
            name
            relatedTopics(first: $limit) {
                id
                name
                stargazers {
                    totalCount
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
