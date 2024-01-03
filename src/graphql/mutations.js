import { gql } from '@apollo/client';

export const AUTENTICATE = gql`
    mutation {
        authenticate(credentials: { username: "kalle", password: "password" }) {
            accessToken
        }
    }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password })  {
      accessToken
    }
  }
`