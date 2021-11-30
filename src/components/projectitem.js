import { Link, Route } from "react-router-dom";
import React, { useState } from "react";
import { ReactComponent as ViewSvg } from "../assets/icons/view.svg";
import { ReactComponent as TrashSvg } from "../assets/icons/trash.svg";
import { ReactComponent as PenSvg } from "../assets/icons/pen.svg";
import { ReactComponent as AddmemberSvg } from "../assets/icons/addmember.svg";
import { ReactComponent as CompleteSvg } from "../assets/icons/complete.svg";
import InfoProject from "../components/modal/infoproject";
import EditProject from "../components/modal/editproject";
import DeleteProject from "../components/modal/deleteproject";
import AddMember from "../components/modal/addmember";
import CompleteProject from "../components/modal/completeproject";
import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import Tasks from "../page/tasks";

function dateTranform(date) {
  if (!date) {
    return "-";
  }
  const newDate = new Date(date).toString().split(" ");
  const completeDate = newDate[2] + " " + newDate[1] + " " + newDate[3];
  return completeDate;
}

function StatusTag({ data }) {
  if (data.status === "INPROGRESS") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
        In Progress
      </span>
    );
  } else if (data.status === "DONE") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Success
      </span>
    );
  } else if (data.status === "LATE") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        Late
      </span>
    );
  } else {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        Error
      </span>
    );
  }
}

function ProjectItem({
  projectData,
  projectMember,
  deleteProject,
  editProject,
  addMember
}) {
  // const httpLink = createHttpLink({
  //   uri: "http://localhost:5000/graphql",
  // });

  // const client = new ApolloClient({
  //   link: httpLink,
  //   cache: new InMemoryCache(),
  // });
  // const [members, setMembers] = useState([]);
  // async function getMembers() {
  //   setMembers([]);
  //   const { data } = await client.query({
  //     query: gql`
  //       ???????
  //     `,
  //     variables: { id: projectData.projectId },
  //   });
  //   if (data.findProjectByUser.length !== 0) {
  //     setData([...data.findProjectByUser]);
  //   }
  // }
  console.log(projectData);
  function changeStateInfoProjectModalFromChild(state) {
    setShowInfoProjectModal(state);
  }
  function changeStateEditModalFromChild(state) {
    setShowEditProjectModal(state);
  }
  function changeStateDeleteModalFromChild(state) {
    setShowDeleteProjectModal(state);
  }
  function changeStateAddMemberModalFromChild(state) {
    setShowAddMemberModal(state);
  }
  function changeStateCompleteModalFromChild(state) {
    setShowCompleteProjectModal(state);
  }

  const [showInfoProjectModal, setShowInfoProjectModal] = React.useState(false);
  const [showEditProjectModal, setShowEditProjectModal] = React.useState(false);
  const [showDeleteProjectModal, setShowDeleteProjectModal] =
    React.useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = React.useState(false);
  const [showCompleteProjectModal, setShowCompleteProjectModal] =
    React.useState(false);
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 ">
              {dateTranform(projectData.startDate)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
            
              <Link
              to={{
                pathname: `/project/${projectData.projectId}/tasks`,
                state: { projectId: projectData.projectId }
              }}
              >
                {projectData.projectName}
              </Link>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <StatusTag data={projectData} />
          </td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <div className="text-sm text-gray-900">
              {dateTranform(projectData.dueDate)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <div className="text-sm text-gray-900 flex ">
              {/* {projectMember.firstName} */}
              <div className="{'h-7 w-5 mr-2 bg-blue-300 text-center rounded-full text-white }">
                L
              </div>
              <div className="{'h-7 w-5 mr-2 bg-green-300 text-center rounded-full text-white }">
                D
              </div>
              <div className="{'h-7 w-5  bg-red-300 text-center rounded-full text-white }">
                N
              </div>
              {/* {projectMember.map((user) => {
                return <>
                  {user.firstName}
                </>
              })} */}
            </div>
          </td>
          {/* <td className="px-6 py-4 whitespace-nowrap ">
              <div className="text-sm text-gray-900">
                {member.join(",")}
              </div>
            </td> */}

          <td className="py-2 px-6 whitespace-nowrap text-center">
            <div className="flex item-left justify-center">
              <div className="w-4 mr-4 transform hover:text-purple-500 hover:scale-110">
                <ViewSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowInfoProjectModal(true);
                  }}
                />
              </div>
              <div className="w-4 mr-4 transform hover:text-yellow-500 hover:scale-110">
                <PenSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowEditProjectModal(true);
                  }}
                />
              </div>
              <div className="w-4 mr-4 transform hover:text-blue-500 hover:scale-110">
                <AddmemberSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowAddMemberModal(true);
                  }}
                />
              </div>
              <div className="w-4 mr-4 transform hover:text-red-500 hover:scale-110">
                <TrashSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowDeleteProjectModal(true);
                  }}
                />
              </div>
              <div className="w-4 mr-4 transform hover:text-green-500 hover:scale-110">
                <CompleteSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowCompleteProjectModal(true);
                  }}
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>

      {showInfoProjectModal ? (
        <InfoProject
          setShowInfoProjectModalFromParent={
            changeStateInfoProjectModalFromChild
          }
          projectData={projectData}
        />
      ) : null}

      {showEditProjectModal ? (
        <EditProject
          setShowEditProjectModalFromParent={changeStateEditModalFromChild}
          projectData={projectData}
          editProject={editProject}
        />
      ) : null}
      {showAddMemberModal ? (
        <>
          <AddMember
            setShowAddMemberModalFromParent={changeStateAddMemberModalFromChild}
            projectData={projectData}
            addMember={addMember}
          />
        </>
      ) : null}
      {showDeleteProjectModal ? (
        <DeleteProject
          setShowDeleteProjectModalFromParent={changeStateDeleteModalFromChild}
          projectData={projectData}
          deleteProject={deleteProject}
        />
      ) : null}
      {showCompleteProjectModal ? (
        <CompleteProject
          setShowCompleteProjectModalFromParent={
            changeStateCompleteModalFromChild
          }
          projectData={projectData}
          editProject={editProject}
        />
      ) : null}
    </>
  );
}

export default ProjectItem;
