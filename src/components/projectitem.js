import { Link } from "react-router";
import React from "react";
import { ReactComponent as ViewSvg } from "../assets/icons/view.svg";
import { ReactComponent as TrashSvg } from "../assets/icons/trash.svg";
import { ReactComponent as PenSvg } from "../assets/icons/pen.svg";
import { ReactComponent as AddmemberSvg } from "../assets/icons/addmember.svg";
import InfoProject from "../components/modal/infoproject";
import EditProject from "../components/modal/editproject";
import DeleteProject from "../components/modal/deleteproject";
import AddMember from "../components/modal/addmember"

function dateTranform(date) {
  const newDate = new Date(date).toString().split(" ");
  const completeDate = newDate[2] + " " + newDate[1] + " " + newDate[3];
  return completeDate;
}


function StatusTag({status}) {
  if (status === "INPROGRESS") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
        In Progress
      </span>
    );
  } else if (status === "SUCCESS") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Success
      </span>
    );
  } else if (status === "LATE") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        Late
      </span>
    );
  }
   else {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        Error
      </span>
    );
  }
}

function ProjectItem({ projectData, deleteProject }) {
  console.log("data date", projectData.startdate);
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

  const [showInfoProjectModal, setShowInfoProjectModal] = React.useState(false);
  const [showEditProjectModal, setShowEditProjectModal] = React.useState(false);
  const [showDeleteProjectModal, setShowDeleteProjectModal] =
    React.useState(false);
    const [showAddMemberModal, setShowAddMemberModal] = React.useState(false);
    
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 ">
                {dateTranform(projectData.startdate)}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                <Link to="/tasks">{projectData.projectname}</Link>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <StatusTag status={projectData.role} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap ">
              <div className="text-sm text-gray-900">
                {dateTranform(projectData.duedate)}
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
      {showAddMemberModal ? (
        <>
          <AddMember
            setShowAddMemberModalFromParent={changeStateAddMemberModalFromChild}
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
    </>
  );
}

export default ProjectItem;
