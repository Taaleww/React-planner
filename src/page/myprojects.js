import "./myprojects.css";
import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";
// import {graphql} from 'react-apollo';
// import { useQuery, useMutation } from "@apollo/client";
import CreateProject from "../components/modal/createproject";
import ProjectItem from "../components/projectitem";
/// TRY ghaphql
import gql from "graphql-tag"
import { useMutation } from '@apollo/react-hooks';

function MyProjects() {
  const [myProjects, setData] = useState([]);

  function changeStateCreateModalFromChild(state) {
    setShowCreateProjectModal(state);
  }

  //apollo client setup
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
  });

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
  
  async function getMyProjects() {
    setData([]);
    //! Change userid to dynamic data /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const { data } = await client.query({
      query: gql`
        query findProjectByUser {
          findProjectByUser(id: 1) {
            project {
              projectid
              projectname
              role
              description
              startdate
              duedate
              completedate
            }
          }
        }
      `,
    });
    if (data.findProjectByUser.length !== 0) {
      setData([...data.findProjectByUser, ...myProjects]);
    }
  }

  async function addProject(projectname, startdate, duedate, description, members) {
    const status = "INPROGRESS";
    const newProject = {
      projectname,
      startdate: new Date(startdate),
      duedate: new Date(duedate),
      description,
      status,
      members,
    };
    console.log(JSON.stringify(newProject));
    const { data, error } = await client.mutate({
      mutation: gql`
      mutation createProject{
        createProject(createProjectInput: $newProject ){
          projectUserRoleid
        }
      }`
    });
    console.log("test: ", error);

    // getMyProjects();
    // setData([newProject, ...myProjects]);
    setShowCreateProjectModal(false);
  }

  const [showCreateProjectModal, setShowCreateProjectModal] =
    React.useState(false);

  useEffect(() => {
    getMyProjects();
  }, []);

  return (
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
                    {myProjects.length === 0 ? (
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 ">
                              Loading . . .
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      myProjects.map((data) => {
                        console.log("data project", data);
                        return (
                          <ProjectItem
                            projectData={data.project}
                            deleteProject={deleteProject}
                            key={data.project.projectid}
                          />
                        );
                      })
                    )}
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
  );
}

export default MyProjects;
