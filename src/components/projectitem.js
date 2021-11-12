import { Link } from "react-router";
import React from "react";
import { ReactComponent as ViewSvg } from "../assets/icons/view.svg";
import { ReactComponent as TrashSvg } from "../assets/icons/trash.svg";
import { ReactComponent as PenSvg } from "../assets/icons/pen.svg";
import InfoProject from "../components/modal/infoproject";
import EditProject from "../components/modal/editproject";
import DeleteProject from "../components/modal/deleteproject";

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
  function dateTranform(date) {
    const newDate = new Date(date).toString().split(" ");
    const completeDate = newDate[2] + " " + newDate[1] + " " + newDate[3];
    return completeDate;
  }
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
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 ">
              {dateTranform(projectData.createDate)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              <Link to="/tasks">{projectData.title}</Link>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <StatusTag status={projectData.status} />
          </td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <div className="text-sm text-gray-900">
              {dateTranform(projectData.dueDate)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <div className="text-sm text-gray-900">{projectData.members.join(',')}</div>
          </td>

          {/* <td className="px-6 py-4 whitespace-nowrap ">
            <div className="py-3 px-6 text-center">
              <div className="flex items-center justify-center">
                <img
                  className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt=""
                />
              </div>
            </div>
          </td> */}
          <td class="py-2 px-6 whitespace-nowrap text-center">
            <div class="flex item-left justify-center">
              <div class="w-4 mr-4 transform hover:text-purple-500 hover:scale-110">
                <ViewSvg className="cursor-pointer" 
                 onClick={() => {
                  setShowInfoProjectModal(true);
                }}/>
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
        setShowInfoProjectModalFromParent={changeStateInfoProjectModalFromChild}
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
