import { Link } from "react-router";
import React from "react";
import { ReactComponent as ViewSvg } from "../assets/icons/view.svg";
import { ReactComponent as TrashSvg } from "../assets/icons/trash.svg";
import { ReactComponent as PenSvg } from "../assets/icons/pen.svg";
import InfoProject from "../components/modal/infoproject";
import EditProject from "../components/modal/editproject";
import DeleteProject from "../components/modal/deleteproject";

/// TRY ghaphql
import gql from "graphql-tag";
import { Query } from "react-apollo";

function dateTranform(date) {
  const newDate = new Date(date).toString().split(" ");
  const completeDate = newDate[2] + " " + newDate[1] + " " + newDate[3];
  return completeDate;
}

const getMyProjects = () => (
  <Query
    query={gql`
      {
        user {
          userid
          firstname
          lastname
          department
          organization
          email
        }
      }
    `}
  >
   
    {(res) => {
      if (res.loading) return <p>loading...</p>;
      if (res.error) return <p>{console.log(res)}</p>;

      return res.data.MyProjects.map(
        ({
          userid,
          firstname,
          lastname,
          department,
          organization,
          email
        }) => (
         
          <div key={userid}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {firstname}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {lastname}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {department}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {email}
              </div>
            </td>
          </div>
          // <div key={projectid}>
          //   <td className="px-6 py-4 whitespace-nowrap">
          //     <div className="text-sm text-gray-900 ">
          //       {dateTranform(startdate)}
          //     </div>
          //   </td>
          //   <td className="px-6 py-4 whitespace-nowrap">
          //     <div className="text-sm text-gray-900">
          //       <Link to="/tasks">{projectname}</Link>
          //     </div>
          //   </td>
          //   {/* <td className="px-6 py-4 whitespace-nowrap">
          //     <StatusTag status={role} />
          //   </td> */}
          //   <td className="px-6 py-4 whitespace-nowrap ">
          //     <div className="text-sm text-gray-900">
          //       {dateTranform(duedate)}
          //     </div>
          //   </td>
          //   <td className="px-6 py-4 whitespace-nowrap ">
          //     <div className="text-sm text-gray-900">
          //       {member.join(",")}
          //     </div>
          //   </td>
          // </div>
        )
      );
    }}
  </Query>
);

function StatusTag({ status }) {
  if (status === "In Progress") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
        In Progress
      </span>
    );
  } else if (status === "Success") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Success
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

function ProjectItem({ projectData, deleteProject }) {
  function changeStateInfoProjectModalFromChild(state) {
    setShowInfoProjectModal(state);
  }
  function changeStateEditModalFromChild(state) {
    setShowEditProjectModal(state);
  }
  function changeStateDeleteModalFromChild(state) {
    setShowDeleteProjectModal(state);
  }

  const [showInfoProjectModal, setShowInfoProjectModal] = React.useState(false);
  const [showEditProjectModal, setShowEditProjectModal] = React.useState(false);
  const [showDeleteProjectModal, setShowDeleteProjectModal] =
    React.useState(false);

  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          {getMyProjects()}
          <td class="py-2 px-6 whitespace-nowrap text-center">
            <div class="flex item-left justify-center">
              <div class="w-4 mr-4 transform hover:text-purple-500 hover:scale-110">
                <ViewSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowInfoProjectModal(true);
                  }}
                />
              </div>
              <div class="w-4 mr-4 transform hover:text-yellow-500 hover:scale-110">
                <PenSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowEditProjectModal(true);
                  }}
                />
              </div>
              <div class="w-4 mr-4 transform hover:text-red-500 hover:scale-110">
                <TrashSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowDeleteProjectModal(true);
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
        />
      ) : null}

      {showDeleteProjectModal ? (
        <DeleteProject
          setShowDeleteProjectModalFromParent={changeStateDeleteModalFromChild}
          projectData={projectData}
          deleteProject={deleteProject}
        />
      ) : null}
    </>
  );
}

export default ProjectItem;
