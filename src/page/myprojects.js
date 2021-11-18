import "./myprojects.css";
import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import gql from "graphql-tag";
// import {graphql} from 'react-apollo';
// import { useQuery, useMutation } from "@apollo/client";
import CreateProject from "../components/modal/createproject";
import ProjectItem from "../components/projectitem";

function MyProjects() {
  function changeStateCreateModalFromChild(state) {
    setShowCreateProjectModal(state);
  }

  //apollo client setup
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
  });

  // const myProjects = gql`
  //   query Project {
  //     Project {
  //       projectid
  //       projectname
  //       description
  //       startdate
  //       duedate
  //       member
  //     }
  //   }
  // `;

  const [myProjects, setData] = useState([
    {
      id: 0,
      title: "Test data",
      createDate: "2021-11-06",
      dueDate: "2021-11-06",
      description: "this is test description",
      status: "Success",
      members: ["one@mail.com", "two@mail.com"],
    },
  ]);

  function deleteProject(target) {
    console.log("TEST: ", target);
    const newList = myProjects.map((data) => {
      if (!(data.id === target)) {
        return data;
      }
    });
    console.log(newList);
    setData(newList);
  }

  function addProject(title, createDate, dueDate, description, members) {
    const status = "In Progress";
    const id = myProjects.length;
    const newProject = {
      id,
      title,
      createDate: new Date(createDate),
      dueDate: new Date(dueDate),
      description,
      status,
      members,
    };
    setData([newProject, ...myProjects]);
    setShowCreateProjectModal(false);
  }

  const [showCreateProjectModal, setShowCreateProjectModal] =
    React.useState(false);
  return (
    <ApolloProvider client={client}>
      <>
        <div className="MyProjects font-bold md:container md:mx-auto bg-white font-mono  ">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                My Projects
              </h3>
            </div>

            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-gray-800  text-white hover:shadow-lg rounded-full  text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear"
                type="button"
                onClick={() => setShowCreateProjectModal(true)}
              >
                CREATE PROJECTS +
              </button>
            </div>
          </div>

          <div className="flex flex-col mb-6 px-4">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-6">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          Due date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          Members
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    {myProjects.map((data) => {
                      return (
                        <ProjectItem
                          projectData={data}
                          deleteProject={deleteProject}
                          key={data.id}
                        />
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal */}
        {showCreateProjectModal ? (
          <CreateProject
            setShowCreateProjectModalFromParent={
              changeStateCreateModalFromChild
            }
            addProject={addProject}
          />
        ) : null}
      </>
    </ApolloProvider>
  );
}

export default MyProjects;
