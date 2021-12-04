import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation ($input: CreateUserInput!) 
    {
        createUser(createUserInput: $input)
        {
            email
            password
            firstName
            lastName
        }
    }
`;

export const LOGIN_USER = gql`
  mutation ($input: LoginInput!) {
    login(loginInput: $input)
  }
`;

export const UPDATE_USER_INFO = gql`
  mutation ($input: UpdateUserInput!) {
    updateUser(updateUserInput: $input) {
      id
      email
      firstname
      lastname
      address
      job
      department
    }
  }
`;
