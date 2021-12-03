import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation createUser($input: CreateUserInput) 
    {
        createUser(createUserInput: $input)
        {
            email
            password
            firstname
            lastname
        }
    }
`;

export const LOGIN_USER = gql`
  mutation ($input: LoginUserInput!) {
    login(loginUserInput: $input)
  }
`;
