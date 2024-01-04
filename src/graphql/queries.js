
import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
            cursor
            node {
                createdAt
                description
                forksCount
                fullName
                id
                language
                name
                ownerAvatarUrl
                ownerName
                ratingAverage
                reviewCount
                stargazersCount
            }
        }
    }
  }
`;

export const ME = gql`{
  me {
    id
    username
  }
}
`;