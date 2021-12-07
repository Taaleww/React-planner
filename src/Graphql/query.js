import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
    query user($input: Int!)
    {
        user(id: $input){
            email
            firstName
            lastName
            job
            department
            organization
            address
            image
        }
    }
`;

export const GET_MY_PROJECT = gql`
    query findProjectByUser($input: Int!) 
    {
      findProjectByUser(id: $input) {
          project {
              projectId
              projectName
              projectStatus {
                  projectStatusId
              }
              description
              startDate
              dueDate
              completeDate
              task {
                  taskName
              }
          }
          user {
            firstName
          }
        }
      }
`;

export const GET_MY_TASK = gql`
      query project($input: Int!)  {
        project(id: $input) {
          projectName
          task {
            taskId
            taskName
            startDate
            dueDate
            taskStatusId{
              taskStatusId
            }
            description
            assign {
              id 
            }
          }
        }
      }
    `;
