import gql from "graphql-tag";

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $firstName: String
    $lastName: String
  ) {
    createAcount(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
    )
  }
`;
